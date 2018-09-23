import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './components/examination/examination.component';
import { ViewerRoutingModule } from './viewer-routing.module';
import { InterviewService } from '../interview/services/interview.service';
import { UrlService } from '../dashboard/services/url-service';
import { MaterialModule } from '../../material/material.module';
import { HttpClient } from '@angular/common/http';
import { PositionsListComponent } from './components/positions-list/positions-list.component';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MaterialModule
  ],
  declarations: [ExaminationComponent, PositionsListComponent],
  providers: [InterviewService, HttpClient, UrlService]
})
export class ViewerModule { }
