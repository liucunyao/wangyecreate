# 智岗匹配

这是一个可部署到公网的职位匹配网页。

## 当前访问地址

先使用 GitHub Pages 默认地址：

```text
https://liucunyao.github.io/wangyecreate/
```

`lotus.jobsearch.me` 不是已购买并配置 DNS 的域名，所以当前项目已经移除 `CNAME`，不再绑定自定义域名。

## GitHub Pages 设置

当前项目已经推送到：

```text
https://github.com/liucunyao/wangyecreate
```

仓库内已经包含：

```text
.nojekyll
```

如果访问 `https://liucunyao.github.io/wangyecreate/` 仍然是 404，需要在 GitHub 仓库中启用 Pages：

1. 打开仓库 `Settings`。
2. 进入 `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. Branch 选择 `gh-pages`，目录选择 `/root`。
5. 如果 Custom domain 中仍有 `lotus.jobsearch.me`，点击 `Remove` 删除。
6. 保存后等待 GitHub Pages 完成发布。

## 本地预览

推荐使用 Node 服务启动，这样页面会启用 `/api/jobs` 职位聚合接口：

```powershell
C:\Users\liucu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe server.mjs
```

然后访问：

```text
http://127.0.0.1:8787/
```

如果你有 RapidAPI 的 JSearch 密钥，可以在启动前配置：

```powershell
$env:RAPIDAPI_KEY="你的密钥"
C:\Users\liucu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe server.mjs
```

没有 API 密钥时，系统会自动展示 BOSS 直聘、智联招聘、前程无忧、猎聘、拉勾招聘的实时检索入口，不会伪造外部网站职位详情。

旧版静态服务仍可使用：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1 -Port 5173
```

然后访问：

```text
http://localhost:5173/
```
