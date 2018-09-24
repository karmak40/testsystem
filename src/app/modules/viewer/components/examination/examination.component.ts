import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionsService } from '../../../dashboard/services/positions.service';
import { TestService } from '../../../dashboard/services/test.service';
import { ViewerService } from '../../../dashboard/services/viewer.service';
import { CandidatService } from '../../../dashboard/services/candidat.service';
import { Position } from '../../../dashboard/models/position';
import { Reviewer } from '../../../dashboard/models/reviever';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  loader: boolean;
 // public position: Position;
  //public viewer: Reviewer;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private positionService: PositionsService,
    private testService: TestService,
    private viewerService: ViewerService,
    private candidatService: CandidatService) { }

  ngOnInit() {

    this.showLoader();
    this.activatedRoute.params.subscribe(params => {
      var viewerId = params['viewerId'];
      console.log (viewerId);
      if (viewerId !== undefined) {
        this.hideLoader();
        this.router.navigate(['candidat-list', viewerId], { relativeTo: this.activatedRoute });
      }
    }, error => {
      this.hideLoader();
    });
  }
 

  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }

}
