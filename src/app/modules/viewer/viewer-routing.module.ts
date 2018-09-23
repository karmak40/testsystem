import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationComponent } from './components/examination/examination.component';


const routes: Routes = [
  {
    // todo add defauld page
    path: '', component: ExaminationComponent,
    children: [
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }