import { Component, OnInit } from '@angular/core';

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
        owner:
        {
          id: 1,
          name: 'weicy',
          avata: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 2,
        desc: '前端开发学习，实战',
        owner:
        {
          id: 1,
          name: 'weicy',
          avata: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 3,
        desc: 'APP安全工具开发',
        owner:
        {
          id: 2,
          name: 'duwei',
          avata: 'avatars:svg-12'
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
        owner:
        {
          id: 1,
          name: 'weicy',
          avata: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 2,
        desc: '前端开发学习，实战',
        owner:
        {
          id: 1,
          name: 'weicy',
          avata: 'avatars:svg-11'
        },
        dueDate: new Date(),
      },
      {
        id: 3,
        desc: 'APP安全工具开发',
        owner:
        {
          id: 2,
          name: 'duwei',
          avata: 'avatars:svg-12'
        },
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
        owner:
        {
          id: 1,
          name: 'weicy',
          avata: 'avatars:svg-11'
        },
        dueDate: new Date(),
      }
    ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
