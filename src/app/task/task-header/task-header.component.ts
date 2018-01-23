import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() copytask = new EventEmitter<void>();
  @Output() DelTask = new EventEmitter<void>();
  @Output() UpdateTaskLists = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  OnNewTask() {
    this.newTask.emit();
  }
  OnMoveAllClick() {
    this.copytask.emit();
  }
  OnDelClick() {
    this.DelTask.emit();
  }
  OnUpdateClick() {
    this.UpdateTaskLists.emit();
  }
}
