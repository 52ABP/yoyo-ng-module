import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `<page-header></page-header>`,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
