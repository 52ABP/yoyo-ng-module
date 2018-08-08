---
order: 2
title: API文档
type: Documents
---

## API

### ACLService

| 方法 | 说明 |
| --- | --- |
| `[change]` | 监听ACL变更通知 |
| `[data]` | 获取所有ACL数据 |
| `setFull(val: boolean)` | 标识当前用户为全量，即不受限 |
| `set(value: ACLType)` | 设置当前用户角色或权限能力（会先清除所有） |
| `setRole(roles: string[])` | 设置当前用户角色（会先清除所有） |
| `setAbility(abilities: (number | string)[])` | 设置当前用户权限能力（会先清除所有） |
| `add(value: ACLType)` | 为当前用户增加角色或权限能力 |
| `attachRole(roles: string[])` | 为当前用户附加角色 |
| `attachAbility(abilities: (number | string)[])` | 为当前用户附加权限 |
| `removeRole(roles: string[])` | 为当前用户移除角色 |
| `removeAbility(abilities: (number | string)[])` | 为当前用户移除权限 |
| `can(roleOrAbility: ACLCanType)` | 当前用户是否有对应角色 |
| `canAbility(ability: ACLCanType)` | 当前用户是否有对应权限点 |

### ACLType

| 属性 | 类型 | 说明 | 默认 |
| --- | --- | --- | --- |
| `[role]` | `string[]` | 角色 | - |
| `[ability]` | `number[], string[]` | 权限点 | - |
| `[mode]` | `allOf, oneOf` | `allOf` 表示必须满足所有角色或权限点数组算有效<br>`oneOf` 表示只须满足角色或权限点数组中的一项算有效 | `oneOf` |
