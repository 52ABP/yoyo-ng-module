---
title: page-header
subtitle: 页头
cols: 1
module: AdProHeaderModule
config: AdPageHeaderConfig
---

页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 标题名 | `string` | -
`[autoTitle]` | 自动生成标题，以当前路由从主菜单中定位  | `boolean` | `true`
`[home]` | 首页文本，若指定空表示不显示  | `string` | `首页`
`[home_link]` | 首页链接  | `string` | `/`
`[home_i18n]` | 首页链接国际化参数 | `string` | -
`[autoBreadcrumb]` | 自动生成导航，以当前路由从主菜单中定位  | `boolean` | `true`
`[breadcrumb]` | 导航区域  | `TemplateRef<any>` | -
`[logo]` | LOGO区域  | `TemplateRef<any>` | -
`[action]` | 操作区域  | `TemplateRef<any>` | -
`[content]` | 内容区域  | `TemplateRef<any>` | -
`[extra]` | 额外信息区域  | `TemplateRef<any>` | -
`[tab]` | 标签区域  | `TemplateRef<any>` | -

**自动生成导航**

默认情况下会根据菜单数据自动生成导航，有时你可能希望隐藏某个节点菜单数据时，可以指定菜单的 `hideInBreadcrumb: true`。
