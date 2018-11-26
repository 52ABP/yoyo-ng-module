---
title: radio
subtitle: Radio
type: Widgets
---

Radio.

## API

### schema

| Property     | Description                  | Type                 | Default |
| ------------ | ---------------------------- | -------------------- | ------- |
| `[readOnly]` | Whether to disable the state | `boolean`            | -       |
| `[enum]`     | Render radio group           | `SFSchemaEnumType[]` | -       |

### ui

| Property      | Description             | Type                                   | Default   |
| ------------- | ----------------------- | -------------------------------------- | --------- |
| `[asyncData]` | Async data source       | `() => Observable<SFSchemaEnumType[]>` | -         |
| `[size]`      | Size of the `nz-radio`  | `string`                               | -         |
| `[styleType]` | Style of the `nz-radio` | `default, button`                      | `default` |
