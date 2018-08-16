---
title: upload
subtitle: 上传
type: Widgets
---

文件选择上传和拖拽上传控件。

## 注意事项

- **务必** 指定 `resReName` 来获取正确数据
- `multiple` 决定返回数组或者单体数据
- `enum`、`asyncData` 最后被转化成 `nzFileList` 值，且**务必**初始保证一个 `response` 属性表示远程数据并 `resReName` 能正确获取，若需要远程删除功能需要指定 `remove` 属性
- 照片墙模式：预览统一使用 `nzModal` 实现且无法自定义

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 数据源 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | -
`[type]` | 上传类型 | `select,drag` | `select`
`[text]` | 按钮文本 | `string` | `点击上传`
`[hint]` | 提醒文本，drag 时有效 | `string` | `支持单个或批量，严禁上传公司数据或其他安全文件`
`[resReName]` | 重命名返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示整个返回体 | `string` | -
`[action]` | 必选参数, 上传的地址 | `string` | -
`[accept]` | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | `string` | -
`[limit]` | 限制单次最多上传数量，`multiple` 打开时有效；`0` 表示不限  | `number` | `0`
`[size]` | 限制文件大小，单位：KB；`0` 表示不限  | `number` | `0`
`[fileType]` | 限制文件类型，例如：`image/png,image/jpeg,image/gif,image/bmp` | `string` | -
`[headers]` | 设置上传的请求头部 | `Object, (file: UploadFile) => Object` | -
`[listType]` | 上传列表的内建样式 | `text,picture,picture-card` | `text`
`[showUploadList]` | 是否展示列表, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon` | `boolean` | `true`
`[multiple]` | 是否支持多选文件，`IE10+` 支持。开启后按住 `ctrl` 可选择多个文件。 | `boolean` | `false`
`[name]` | 发到后台的文件参数名 | `string` | `file`
`[data]` | 上传所需参数或返回上传参数的方法 | `Object, (file: UploadFile) => Object` | -
`[withCredentials]` | 上传请求时是否携带 cookie | `boolean` | `false`
`[remove]` | 点击移除文件时的回调，返回值为 `false` 时不移除 | `(file: UploadFile) => boolean｜Observable` | -
`[change]` | 上传文件改变时的状态 | `(args: UploadChangeParam) => void` | -
