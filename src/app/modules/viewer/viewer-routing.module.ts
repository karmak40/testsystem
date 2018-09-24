import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationComponent } from './components/examination/examination.component';
import { CandidatsListComponent } from './components/positions-list/positions-list.component';
import { RatingComponent } from './components/rating/rating.component';


const routes: Routes = [
  {
    // todo add defauld page
    path: ':viewerId', component: ExaminationComponent,
    children: [
        {
          path: 'candidat-list/:viewerId', component: CandidatsListComponent
        },
        {
          path: 'rating/:id/:viewerId', component: RatingComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }