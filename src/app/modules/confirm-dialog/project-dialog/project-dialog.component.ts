import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DialogProjectData } from '../data-models/dialog.project.data';


@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  public inputdata: DialogProjectData;


  stufen: string[] = [
    'Auftrag', 'Intern', 'Ohne Auftrag'
  ]


  constructor(public dialogRef: MatDialogRef<DialogProjectData>,@Inject(MAT_DIALOG_DATA) public data:DialogProjectData) { }

  ngOnInit() {
    this.inputdata = new DialogProjectData();
  }

}
