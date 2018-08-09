---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      id1: { type: 'number', ui: { widget: 'text' } },
      id2: { type: 'number', ui: { widget: 'text', defaultText: 'default text' } },
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        }
      }
    },
    required: ['name']
  };
  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
