import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { DialogEmployeeData } from './data-models/dialog.employee.data';
import { DialogProjectData } from './data-models/dialog.project.data';
import { Observable } from 'rxjs';


@Injectable()
export class DialogsService {

    public employeeData: DialogEmployeeData;
    public projectData: DialogProjectData;
    public name: string;

    constructor(private dialog: MatDialog) { }


    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;

        dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public projectCreation() {

        let dialogRef = this.dialog.open(ProjectDialogComponent, {
            data: { data: this.projectData }
        });

        return dialogRef;

    }

}
