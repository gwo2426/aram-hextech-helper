# ARAM Hextech Helper

<div align="center">

![ARAM Hextech Helper](https://img.shields.io/badge/ARAM-Hextech%20Helper-00d9ff?style=for-the-badge&logo=league-of-legends)
![Version](https://img.shields.io/badge/version-1.0-a855f7?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-fbbf24?style=for-the-badge)

**专为英雄联盟海克斯大乱斗模式打造的辅助工具**

[在线访问](https://3000-iyek3t4avqh0a0ap44dkv-7c379893.us1.manus.computer) · [功能介绍](#功能特性) · [技术栈](#技术栈)

</div>

---

## 📖 项目简介

ARAM Hextech Helper 是一个专门为英雄联盟海克斯大乱斗（ARAM）模式设计的辅助网站。采用赛博朋克未来主义风格，提供海克斯符文数据库、英雄推荐系统和符文套路Build，帮助玩家在游戏中做出更好的决策。

## ✨ 功能特性

### 🔮 海克斯符文库
- **完整数据库**：包含25+海克斯符文的详细信息
- **智能搜索**：支持按名称、效果搜索符文
- **分级筛选**：按棱彩、金色、银色稀有度筛选
- **详细说明**：每个符文都有完整的效果描述

### 🎯 英雄推荐系统
- **强度排名**：S/A/B/C级英雄分级
- **数据统计**：胜率、登场率实时数据
- **符文推荐**：为每个英雄推荐最适合的符文组合
- **玩法指南**：详细的英雄玩法风格说明

### 🎲 符文套路Build
- **热门构筑**：8种经过验证的符文组合套路
- **适用英雄**：每个Build推荐适合的英雄列表
- **玩法思路**：详细的构筑理念和使用方法
- **评分系统**：社区评分帮助选择最优Build

## 🎨 设计特色

### 赛博朋克未来主义风格
- **配色方案**：霓虹青色 + 电紫色 + 海克斯金
- **视觉效果**：霓虹光晕、扫描线动画、六边形图案
- **字体系统**：Orbitron标题 + Inter正文 + JetBrains Mono代码
- **交互动效**：悬停效果、过渡动画、渐变背景

## 🛠 技术栈

### 前端框架
- **React 19** - 最新版本React框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速的构建工具
- **Wouter** - 轻量级路由库

### UI组件
- **Tailwind CSS 4** - 原子化CSS框架
- **shadcn/ui** - 高质量React组件库
- **Lucide React** - 精美的图标库
- **Framer Motion** - 流畅的动画库

### 开发工具
- **pnpm** - 高效的包管理器
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## 📦 安装与运行

### 前置要求
- Node.js 22+
- pnpm 10+

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```

访问 `http://localhost:3000` 查看网站

### 构建生产版本
```bash
pnpm build
```

### 预览生产版本
```bash
pnpm preview
```

## 📁 项目结构

```
aram-hextech-helper/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── components/    # React组件
│   │   │   ├── ui/       # shadcn/ui组件
│   │   │   └── Navigation.tsx
│   │   ├── data/         # 数据文件
│   │   │   ├── augments.ts
│   │   │   ├── champions.ts
│   │   │   └── builds.ts
│   │   ├── pages/        # 页面组件
│   │   │   ├── Home.tsx
│   │   │   ├── Augments.tsx
│   │   │   ├── Champions.tsx
│   │   │   └── Builds.tsx
│   │   ├── App.tsx       # 应用入口
│   │   └── index.css     # 全局样式
│   └── index.html        # HTML模板
├── server/               # 服务器代码
├── package.json          # 项目配置
└── README.md            # 项目文档
```

## 🎮 使用指南

### 1. 查看符文库
- 访问"符文库"页面浏览所有海克斯符文
- 使用搜索框快速查找特定符文
- 点击稀有度标签筛选不同等级的符文

### 2. 英雄推荐
- 访问"英雄"页面查看英雄强度排名
- 按职业筛选（法师、射手、坦克等）
- 查看每个英雄的推荐符文和玩法风格

### 3. 学习套路
- 访问"套路"页面浏览热门Build
- 查看每个Build的符文组合和适用英雄
- 学习高手的构筑思路和玩法理念

## 🔄 数据更新

项目数据基于 **Patch 26.3** 版本，包括：
- 25+ 海克斯符文
- 15+ 英雄数据
- 8 种热门Build套路

数据会随着游戏版本更新而更新。

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 如何贡献
1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📝 开发计划

- [ ] 添加更多英雄数据
- [ ] 实现符文对比功能
- [ ] 添加个人收藏功能
- [ ] 支持PWA离线访问
- [ ] 添加英雄详情页
- [ ] 集成游戏数据API

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [League of Legends](https://www.leagueoflegends.com/) - 游戏数据来源
- [League of Legends Wiki](https://leagueoflegends.fandom.com/) - 符文信息参考
- [shadcn/ui](https://ui.shadcn.com/) - UI组件库
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架

## 📞 联系方式

- GitHub: [@gwo2426](https://github.com/gwo2426)
- 项目地址: [https://github.com/gwo2426/aram-hextech-helper](https://github.com/gwo2426/aram-hextech-helper)

---

<div align="center">

**⚡ 准备好称霸嚎哭深渊了吗？⚡**

Made with ❤️ for ARAM players

</div>
