import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name: 'APP真机测试云建设',
      desc: 'APP真机测试云建设',
      coverImg: 'assets/img/covers/0.jpg',
    },
    {
      name: '硬件测试项目',
      desc: '硬件测试项目',
      coverImg: 'assets/img/covers/1.jpg',
    },
    {
      name: 'CTBOSS项目',
      desc: 'CTBOSS项目',
      coverImg: 'assets/img/covers/2.jpg',
    },
    {
      name: 'BOMC项目',
      desc: 'BOMC项目',
      coverImg: 'assets/img/covers/3.jpg',
    }
  ];
  constructor(private dialog: MatDialog ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent, {data: 'this is a new dialog'});
  }

}
