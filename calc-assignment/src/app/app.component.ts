


import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <button><a href="https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html#!#sts=Pipe">More info in Docs DatePipe</a></button>
  <table width="100%" border="1">
    <tr>
      <th colspan="2">Test format Date Angular v.{{version}}</th>
    </tr>
    <tr>
      <th>Date</th>
      <th>Format</th>
    </tr>
    <tr>
      <th colspan="2">Model Date ({{dateNow}})</th>
    </tr>
    <tr *ngFor="let format of formatsDateTest">
      <td>{{dateNow | date: format}}</td>
      <td>{{format}}</td>
    </tr>
    <tr>
      <th colspan="2">Model string ISO ({{dateNowISO}})</th>
    </tr>
    <tr *ngFor="let format of formatsDateTest">
      <td>{{dateNowISO | date: format}}</td>
      <td>{{format}}</td>
    </tr>
    <tr>
      <th colspan="2">Model Number Milliseconds ({{dateNowMilliseconds}})</th>
    </tr>
    <tr *ngFor="let format of formatsDateTest">
      <td>{{dateNowMilliseconds | date: format}}</td>
      <td>{{format}}</td>
    </tr>
  </table>
  `,
  styles: [`
    table{
      border-spacing: 0;
      border-color: #EEE;
    }`]
})
export class AppComponent {
  version = VERSION.full;
  
  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MM-yyyy HH:mm:ss',
    'MM/dd/yyyy',
    'MM/dd/yyyy hh:mm:ss',
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'dd/MM/yy',
    'dd/MM/yy hh:mm:ss',
    ];
  
  dateNow : Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();
}
