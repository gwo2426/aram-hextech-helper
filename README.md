# ARAM Mayhem Helper

> 一个为英雄联盟海克斯大乱斗准备的**极简个人辅助资料站**：在选英雄、选符文时，快速找到可执行的参考。

[在线预览](https://aramhelper-25jtrbmi.manus.space) · [GitHub 仓库](https://github.com/gwo2426/aram-hextech-helper)

## 现在有什么

| 模块 | 用途 |
|---|---|
| **符文速查** | 搜索中文名、英文名、效果；按稀有度和全部类型筛选。 |
| **英雄参考** | 浏览英雄玩法、胜率快照、登场率与推荐符文。 |
| **特色套路** | 8 个套路的核心组合、适配英雄、优势、风险与实战提示。 |
| **Hash 路由** | 适配 GitHub Pages；刷新 `#/augments` 等子页面不会 404。 |

## 设计原则

- 不使用背景图、插画或大尺寸素材。
- 深色纯色界面、细边框与高信息密度；优先服务游戏中的快速决策。
- 页面内直接说明数据边界，避免把静态资料快照误称为实时数据。

## 数据说明

> **当前为本地资料快照，不是实时 API。**
>
> 符文效果、胜率、登场率与套路建议会随游戏版本变化；请以游戏客户端和官方公告为准。

- 资料复核：2026-10-08
- 参考来源：英雄联盟官方 Wiki、公开社区资料与人工整理
- 当前收录：47 个符文、172 位英雄资料、8 个特色套路

## 本地运行

要求：Node.js 22+、pnpm 10+。

```bash
pnpm install
pnpm dev
```

构建生产版本：

```bash
pnpm build
```

构建 GitHub Pages 版本：

```bash
GITHUB_PAGES=true pnpm build
```

GitHub Pages 地址将使用 Hash 路由，例如：

```text
https://gwo2426.github.io/aram-hextech-helper/#/augments
```

## 后续方向

- 建立经授权的数据更新管线，并明确显示来源、版本与更新时间。
- 核对并继续补全符文资料。
- 增加英雄详情页、收藏和符文对比。
- 扩充套路标签、搜索与投稿机制。

## 声明

ARAM Mayhem Helper 为非官方个人项目，与 Riot Games 无隶属关系。英雄联盟、Riot Games 及相关标志为其各自权利人的商标或注册商标。

## 许可证

[MIT License](LICENSE)
