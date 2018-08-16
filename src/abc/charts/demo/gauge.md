---
order: 7
title: 仪表盘
---

仪表盘是一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-gauge title="核销率" height="164" [percent]="percent"></g2-gauge>
  `
})
export class DemoComponent {
    percent = 87;
    constructor() {
        setInterval(() => this.percent = parseInt((Math.random() * 100).toString(), 10), 1000);
    }
}
```
