---
order: 1
title: 开始使用
type: Documents
---

`@delon/theme` 是 ng-alain 架手脚唯一必须引入的模块。它包含了几十种[参数](/theme/global)，你可以通过覆盖参数数值进而定制一些特别的需求；以及若干通过性[服务](/theme/menu)、[管道](/theme/date)。

## 样式

ng-alain 默认使用 less 作为样式语言，建议在使用前或者遇到疑问时学习一下 [less](http://lesscss.org/) 的相关特性，如果想获取基础的 CSS 知识或查阅属性，可以参考 [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)。

## 脚手架样式

在开发过程中，绝大部分情况下可以利用 ng-alain 提供的工具集来调整间距、颜色、大小、边框等，它是一个套类似 bootstrap 风格的工具集。

当然你也可以通过 *src/styles/index.less* 下定制你的样式，这些样式将会在全局应用中有效，且有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

因此，除非设计师明确需求以外，我们应该尽可能使用组件 `styles` 属性创建组件样式，有关如何Angular样式请参考《[关于Angular样式封装](https://zhuanlan.zhihu.com/p/31235358)》。

### 如何覆盖参数

脚手架里有一个叫 [theme.less](https://github.com/cipchk/ng-alain/blob/master/src/styles/theme.less) LESS文件，允许你在注册 ng-alain 主题样式**之前**重新覆盖参数数值，我们也提供一个简单的[自定义主题](/tools/theme)工具，可以简单配置并将生成主题参数粘贴至 [theme.less](https://github.com/cipchk/ng-alain/blob/master/src/styles/theme.less) 可以实时变化 ng-alain 的主题效果。

## 动态主题

这里的动态主题是指**颜色**部分，ng-alain 里默认并没有这一选项，你可以下载 [color.less](https://github.com/cipchk/delon/blob/master/site/assets/color.less) 至 `./assets/` 目录下，并且参考 ng-alain.com 的做法应用颜色方法 [apply()](https://github.com/cipchk/delon/blob/master/site/app/routes/tools/theme/editor/editor.component.ts#L74) 来动态改变颜色。
