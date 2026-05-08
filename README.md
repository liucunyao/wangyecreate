# 智岗匹配

这是一个可部署到公网的职位匹配网页。目标访问域名：

```text
http://lotus.jobsearch.me
```

## 当前域名状态

本机 DNS 查询结果显示：

```text
lotus.jobsearch.me -> Non-existent domain
```

这说明该子域名目前没有 DNS 记录。需要在 `jobsearch.me` 的 DNS 控制台中添加 `lotus` 子域名解析。

## 推荐部署方式

### GitHub Pages

当前项目已经推送到：

```text
https://github.com/liucunyao/wangyecreate
```

仓库内已经包含：

```text
CNAME
.github/workflows/pages.yml
```

如果访问 `https://liucunyao.github.io/wangyecreate/` 仍然是 404，需要在 GitHub 仓库中启用 Pages：

1. 打开仓库 `Settings`。
2. 进入 `Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 回到 `Actions` 页面，运行或等待 `Deploy static site to GitHub Pages` 工作流完成。
5. 部署成功后，再在 `jobsearch.me` 的 DNS 中添加：

```text
Type: CNAME
Name: lotus
Value: liucunyao.github.io
```

DNS 生效后访问：

```text
http://lotus.jobsearch.me
```

### Cloudflare Pages

1. 将本目录上传到 Git 仓库。
2. 在 Cloudflare Pages 新建项目，选择该仓库。
3. 构建命令留空。
4. 输出目录填写 `/`。
5. 部署成功后，在 Custom domains 中添加：

```text
lotus.jobsearch.me
```

6. 根据 Cloudflare 提示，在 `jobsearch.cn` 的 DNS 中添加或修改 CNAME 记录。

### Vercel

1. 将本目录上传到 Git 仓库。
2. 在 Vercel 新建 Project。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 留空或填写 `.`。
6. 在 Project Settings -> Domains 中添加：

```text
lotus.jobsearch.me
```

7. 根据 Vercel 提示修改 DNS 记录。

## DNS 需要改成什么

具体值取决于你选择的平台：

- Cloudflare Pages 通常会要求添加 CNAME 到类似 `你的项目.pages.dev`。
- Vercel 通常会要求添加 CNAME 到 `cname.vercel-dns.com`。

不要继续指向：

```text
空记录或其他旧记录
```

否则用户访问 `lotus.jobsearch.me` 时不会打开本网页。

## 本地预览

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1 -Port 5173
```

然后访问：

```text
http://localhost:5173/
```
