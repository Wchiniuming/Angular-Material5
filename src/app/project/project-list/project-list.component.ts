import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

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
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  InviteMember() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  lanchUpdateProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  lanchDelProjDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '是否确认删除本项目？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
