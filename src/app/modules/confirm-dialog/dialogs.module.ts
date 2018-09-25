import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsService } from './dialogs.service';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [ConfirmDialogComponent, ProjectDialogComponent],
  exports: [ConfirmDialogComponent, ProjectDialogComponent],
  entryComponents: [ConfirmDialogComponent, ProjectDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }