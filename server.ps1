param(
  [int]$Port = 5173
)

$Root = $PSScriptRoot
$Listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$Listener.Start()

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

while ($true) {
  $Client = $null

  try {
    $Client = $Listener.AcceptTcpClient()
    $Stream = $Client.GetStream()
    $Reader = [System.IO.StreamReader]::new($Stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $RequestLine = $Reader.ReadLine()

    while ($Reader.ReadLine()) {
    }

    $RequestedPath = "index.html"
    if ($RequestLine -match "^[A-Z]+\s+([^ ]+)") {
      $RequestedPath = [Uri]::UnescapeDataString($Matches[1].Split("?")[0].TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($RequestedPath)) {
        $RequestedPath = "index.html"
      }
    }

    $FullPath = [System.IO.Path]::GetFullPath((Join-Path $Root $RequestedPath))
    $IsAllowed = $FullPath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)

    if (-not $IsAllowed -or -not [System.IO.File]::Exists($FullPath)) {
      $Body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $Header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
    } else {
      $Body = [System.IO.File]::ReadAllBytes($FullPath)
      $ContentType = Get-ContentType $FullPath
      $Header = "HTTP/1.1 200 OK`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
    }

    $HeaderBytes = [System.Text.Encoding]::ASCII.GetBytes($Header)
    $Stream.Write($HeaderBytes, 0, $HeaderBytes.Length)
    $Stream.Write($Body, 0, $Body.Length)
  } catch {
    $Message = "[$(Get-Date -Format s)] $($_.Exception.Message)"
    Add-Content -Path (Join-Path $Root "server-runtime.log") -Value $Message
  } finally {
    if ($Client) {
      $Client.Close()
    }
  }
}
