export class MenuItem {
  name = '';
  permissionName = '';
  icon = '';
  route = '';
  items?: MenuItem[];
  //tab中是否允许关闭
  reuseClosable = true;
  //复用标签在中台系统非常常见，本质是解决不同路由页切换时组件数据不丢失问题。
  reuse = true;
  //是否隐藏面包屑导航
  hideInBreadcrumb = false;
  //是否显示到silderbar上
  isDisplay = true;
  /**
   * 菜单项构造函数
   * @param name 菜单名称
   * @param permissionName 菜单访问权限名称
   * @param icon 图标
   * @param route 路由地址
   * @param childItems 子菜单项
   * @param isDisplay 是否显示到silderbar上 默认：true
   * @param reuse 复用标签,本质是解决不同路由页切换时组件数据不丢失问题。默认值：true
   * @param reuseClosable Tab中是否允许关闭 默认值：true
   * @param hideInBreadcrumb 是否隐藏面包屑导航 默认值：false
   */
  constructor(name: string, permissionName: string, icon: string, route: string, childItems?: MenuItem[], isDisplay = true, reuse = true, reuseClosable = true, hideInBreadcrumb = false) {
    this.name = name;
    this.permissionName = permissionName;
    this.icon = icon;
    this.route = route;
    this.items = childItems;
    this.reuse = reuse;
    this.reuseClosable = reuseClosable;
    this.hideInBreadcrumb = hideInBreadcrumb;
    this.isDisplay = isDisplay;
  }
}
