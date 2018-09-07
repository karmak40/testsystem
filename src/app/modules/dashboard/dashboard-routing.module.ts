import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './components/dashboard/dashboard.main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';
import { PositionDetailComponent } from './components/position-detail/position-detail.component';
import { PositionAddComponent } from './components/position-add/position-add.component';


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
        path: 'position-detail',
        component: PositionDetailComponent
      },
      {
        path: 'position-add',
        component: PositionAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }