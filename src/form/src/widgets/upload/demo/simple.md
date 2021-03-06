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
import { SFSchema } from 'yoyo-ng-module/src/form';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
    schema: SFSchema = {
        properties: {
            avatar: {
                type: 'string',
                title: '头像',
                enum: [
                    {
                        uid: -1,
                        name: 'xxx.png',
                        status: 'done',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                        response: {
                            resource_id: 1
                        }
                    }
                ],
                ui: {
                    widget: 'upload',
                    action: '/upload',
                    resReName: 'resource_id'
                }
            },
            // 拖动模式
            drag: {
                type: 'string',
                title: 'Drag',
                ui: {
                    widget: 'upload',
                    action: '/upload',
                    resReName: 'resource_id',
                    type: 'drag'
                }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
