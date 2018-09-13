import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './components/dashboard/dashboard.main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { PositionAddComponent } from './components/position-add/position-add.component';
import { CandidatDetailComponent } from './components/candidat-detail/candidat-detail.component';


const routes: Routes = [
  {
    path: '', component: DashboardMainComponent,
    children: [
      {
        path: 'dashboard',
        component: ContentComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'position-add/:id',
        component: PositionAddComponent
      },
      {
        path: 'position-detail/:id',
        component: PositionDetailComponent,
      },
      {
        path: 'candidat-detail',
        component: CandidatDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }