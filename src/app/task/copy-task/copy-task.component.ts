import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {

  lists: any[];
  constructor(@Inject(MAT_DIALOG_DATA) private data,
  private dialog: MatDialogRef<CopyTaskComponent>) {
  }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}