import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './components/interview/interview.component';


const routes: Routes = [
  {
    // todo add defauld page
    path: ':id', component: InterviewComponent,
    children: [
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }