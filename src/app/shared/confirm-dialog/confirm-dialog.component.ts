import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 matDialogTitle>{{title}}</h1>
    <mat-dialog-content>
      {{content}}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color="primary" (click)="OnClick(true)">保存</button>
      <button mat-button matDialogClose (click)="OnClick(false)">关闭</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {}

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  OnClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
