import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { InterviewModule } from './modules/interview/interview.module';
import { ViewerModule } from './modules/viewer/viewer.module';

const routes: Routes = [
  { path: 'examination', loadChildren: () => ViewerModule },
  { path: 'interview', loadChildren: () => InterviewModule },
  { path: '', loadChildren: () => LoginModule },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}