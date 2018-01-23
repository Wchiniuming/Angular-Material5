import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-tasklist',
  templateUrl: './new-tasklist.component.html',
  styleUrls: ['./new-tasklist.component.scss']
})
export class NewTasklistComponent implements OnInit {
  title = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data,
  private dialogRef: MatDialogRef<NewTasklistComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
