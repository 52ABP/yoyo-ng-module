import { SFRenderSchema, SFHorizontalLayoutSchema } from './schema/ui';

export interface SFButton {
  /** 提交按钮文本，默认：`提交` */
  submit?: string;
  /** 提交按钮类型，默认：`primary` */
  submit_type?: string;
  /** 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置` */
  reset?: string;
  /** 重置按钮类型，默认：`default` */
  reset_type?: string;
  /** 按钮样式，主要用于指定按钮 `grid`、`class` 属性 */
  render?: SFRenderButton;
  /** 搜索按钮文本，默认：`搜索` */
  search?: string;
  /** 保存按钮文本，默认：`保存` */
  edit?: string;
}

export interface SFRenderButton extends SFHorizontalLayoutSchema, SFRenderSchema {

}
