import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTasklistComponent } from './new-tasklist/new-tasklist.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    TaskHomeComponent,
    NewTaskComponent,
    NewTasklistComponent,
    CopyTaskComponent
  ],
  entryComponents: [
    NewTaskComponent,
    NewTasklistComponent,
    CopyTaskComponent
  ]
})
export class TaskModule { }
