import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  prioridtys = [
    {
      value: 1 ,
      label: '紧急'
    },
    {
      value: 1 ,
      label: '重要'
    },
    {
      value: 1 ,
      label: '普通'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
