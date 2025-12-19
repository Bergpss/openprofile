# 💎 OpenProfile

OpenProfile 是一个受 Bento.me 启发的、高度可定制的个人主页生成器。它允许你通过简单的 YAML 配置文件构建出一个极具“高级感”的 Bento 风格主页，并轻松部署到 GitHub Pages。

![OpenProfile Demo](https://raw.githubusercontent.com/username/openprofile/main/public/demo.png)

## ✨ 特性

- 🍱 **Bento 风格网格**：自动化的响应式网格布局，支持多种卡片尺寸。
- 💎 **高级感 UI (Premium UI)**：内置毛玻璃效果 (Glassmorphism)、平滑渐变和精致微动效。
- 📄 **YAML 驱动**：无需编写复杂代码，通过编辑 `src/data/profile.yaml` 即可完成全文自定义。
- 📱 **全平台适配**：从桌面端到移动端，页面布局自动适配。
- 🚀 **一键部署**：内置 GitHub Actions，推送代码即可自动部署到 GitHub Pages。

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/your-username/openprofile.git
cd openprofile
```

### 2. 安装并运行
```bash
npm install
npm run dev
```

### 3. 自定义配置
编辑 `src/data/profile.yaml` 文件：
```yaml
name: 张三
title: 全栈开发者
bio: "热爱技术，热爱生活..."
theme: dark  # 或 light
accentColor: "#6366f1"

cards:
  - id: about
    type: intro
    size: 2x2
    title: 👋 你好！
    content: |
      我是张三...
```

## 📦 部署到 GitHub Pages

1. **修改项目名称**：在 `package.json` 中修改 `name`。
2. **设置 GitHub 仓库**：在 GitHub 上创建一个新仓库并推送代码。
3. **启用 Pages**：
   - 进入仓库的 `Settings` > `Pages`。
   - 在 `Build and deployment` > `Source` 中选择 `GitHub Actions`。
4. **推送代码**：每次推送到 `main` 分支都会触发自动部署。

## 🛠️ 卡片类型说明

| 类型 | 说明 | 配置参数 |
|------|------|----------|
| `intro` | 核心介绍卡片 | `title`, `content` |
| `social` | 社交媒体链接 | `platform` (github, twitter, etc), `url`, `username` |
| `link` | 自定义跳转链接 | `icon`, `label`, `url`, `color` |
| `image` | 图片展示 | `src`, `alt`, `objectFit` |
| `text` | 引用或纯文本 | `content`, `align` |

## 🤝 贡献

欢迎提交 Pull Request 或 Issue 来帮助 OpenProfile 变得更好！

## 📄 开源协议

MIT License
