import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTasklistComponent } from '../new-tasklist/new-tasklist.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
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
    this.dialog.open(NewTasklistComponent);
  }
  openCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  lanchUpdateDialog(task) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务', updatetask: task}});
  }
}
