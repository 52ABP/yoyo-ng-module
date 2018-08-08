
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
        },
        format: 'mobile',
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号',
        readOnly: true
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号'
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色'
      },
    },
    required: ['name'],
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
