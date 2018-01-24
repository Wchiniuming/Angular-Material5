import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { taskItemAnim } from '../../animate/task-item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    taskItemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() ItemClick = new EventEmitter<void>();
  taskState = 'out';
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  OnItemClick() {
    this.ItemClick.emit();
  }
  CheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.taskState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.taskState = 'out';
  }

}
