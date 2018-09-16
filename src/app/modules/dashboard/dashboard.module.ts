import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './components/dashboard/dashboard.main.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';
import { PositionsService } from './services/positions.service';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { PositionAddComponent } from './components/position-add/position-add.component';
import { CandidatDetailComponent } from './components/candidat-detail/candidat-detail.component';
import { BigPictureComponent } from './components/big-picture/big-picture.component';
import { UrlService } from './services/url-service';
import { CandidatService } from './services/candidat.service';
import { TestService } from './services/test.service';
import { ViewerService } from './services/viewer.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardMainComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    ProfileComponent,
    ContentComponent,
    PositionDetailComponent,
    PositionAddComponent,
    CandidatDetailComponent,
    BigPictureComponent
  ],
  providers: [PositionsService, PositionsService, UrlService, CandidatService, TestService, ViewerService]
})
export class DashboardModule { }
