import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewService } from './services/interview.service';
import { MaterialModule } from '../../material/material.module';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../dashboard/services/url-service';
import { InterviewHeaderComponent } from './components/interview-header/interview-header.component';
import { AssesmentComponent } from './components/assesment/assesment.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewRoutingModule,
    MaterialModule
  ],
  declarations: [InterviewComponent, InterviewHeaderComponent, AssesmentComponent],
  providers: [InterviewService, HttpClient, UrlService]
})
export class InterviewModule { }
