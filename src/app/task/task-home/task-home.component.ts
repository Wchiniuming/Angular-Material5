import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTasklistComponent } from '../new-tasklist/new-tasklist.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { routerAnim } from '../../animate/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    routerAnim
  ]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@rtAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
      {
        id: 1,
        desc: 'APP机房建设',
        completed: true,
        priority: 1,
        owner:
        {
          id: 1,
          name: 'weicy',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
        reminder: new Date(),
      },
      {
        id: 2,
        desc: '前端开发学习，实战',
        completed: true,
        priority: 2,
        owner:
        {
          id: 1,
          name: 'weicy',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 3,
        desc: 'APP安全工具开发',
        completed: false,
        priority: 1,
        owner:
        {
          id: 2,
          name: 'duwei',
          avatar: 'avatars:svg-12'
        },
        dueDate: new Date(),
      }
    ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
      {
        id: 1,
        desc: 'APP机房建设',
        completed: false,
        priority: 3,
        owner:
        {
          id: 1,
          name: 'weicy',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 2,
        desc: '前端开发学习，实战',
        completed: false,
        priority: 3,
        owner:
        {
          id: 1,
          name: 'weicy',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 3,
        desc: 'APP安全工具开发',
        completed: true,
        priority: 1,
        dueDate: new Date(),
      }
    ]
    },
    {
      id: 3,
      name: '已完成',
      tasks: [
      {
        id: 1,
        desc: 'ATAP初期建设',
        completed: true,
        priority: 1,
        owner:
        {
          id: 1,
          name: 'weicy',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
      }
    ]
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  openNewTasklistDialog() {
    this.dialog.open(NewTasklistComponent,  {data: {title: '新建任务列表'}});
  }
  openCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  lanchUpdateDialog(task) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务', updatetask: task}});
  }

  lanchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务', content: '您是否确认删除本任务？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  lanchUpdateTaskListDialg() {
    const dialogRef = this.dialog.open(NewTasklistComponent, {data: {title: '编辑任务列表名称'}});
  }
}
