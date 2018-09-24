import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './components/examination/examination.component';
import { ViewerRoutingModule } from './viewer-routing.module';
import { InterviewService } from '../interview/services/interview.service';
import { UrlService } from '../dashboard/services/url-service';
import { MaterialModule } from '../../material/material.module';
import { HttpClient } from '@angular/common/http';
import { PositionsService } from '../dashboard/services/positions.service';
import { TestService } from '../dashboard/services/test.service';
import { ViewerService } from '../dashboard/services/viewer.service';
import { CandidatService } from '../dashboard/services/candidat.service';
import { CandidatsListComponent } from './components/positions-list/positions-list.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MaterialModule
  ],
  declarations: [ExaminationComponent, CandidatsListComponent, RatingComponent],
  providers: [InterviewService, HttpClient, UrlService, PositionsService, TestService, ViewerService, CandidatService]
})
export class ViewerModule { }
