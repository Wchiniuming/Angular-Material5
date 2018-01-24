import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { routerAnim } from '../../animate/router.anim';
import { projListAnim } from '../../animate/proj-list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    routerAnim, projListAnim
  ]
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@rtAnim') state;
  projects = [
    {
      id: '1',
      name: 'APP真机测试云建设',
      desc: 'APP真机测试云建设',
      coverImg: 'assets/img/covers/0.jpg',
    },
    {
      id: '2',
      name: '硬件测试项目',
      desc: '硬件测试项目',
      coverImg: 'assets/img/covers/1.jpg',
    },
    {
      id: '3',
      name: 'CTBOSS项目',
      desc: 'CTBOSS项目',
      coverImg: 'assets/img/covers/2.jpg',
    },
  ];
  constructor(private dialog: MatDialog ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects, {id: '4', name: 'new proj', desc: 'new proj desc', coverImg: 'assets/img/covers/4.jpg'}];
    });
  }

  InviteMember() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  lanchUpdateProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  lanchDelProjDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '是否确认删除本项目？'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id !== project.id);
    });
  }

}
