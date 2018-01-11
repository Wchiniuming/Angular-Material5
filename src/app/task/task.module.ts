import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskHomeComponent } from './task-home/task-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskListComponent, TaskItemComponent, TaskHeaderComponent, TaskHomeComponent]
})
export class TaskModule { }
