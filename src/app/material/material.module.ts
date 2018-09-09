import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatNativeDateModule,
} from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
        MatTreeModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatDividerModule,
        MatNativeDateModule, 
        MatExpansionModule,
        MatTooltipModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatStepperModule,
        MatTabsModule,
        NgbModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatTooltipModule,
        MatDividerModule,
        MatStepperModule,
        MatTreeModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        NgbModule
    ],
})
export class MaterialModule { }