import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionsService } from '../../../dashboard/services/positions.service';
import { TestService } from '../../../dashboard/services/test.service';
import { ViewerService } from '../../../dashboard/services/viewer.service';
import { CandidatService } from '../../../dashboard/services/candidat.service';
import { Position } from '../../../dashboard/models/position';
import { Reviewer } from '../../../dashboard/models/reviever';
import { Candidat } from '../../../dashboard/models/candidat';
import { Rating } from '../../../dashboard/models/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  loader: boolean;
  public finalSum: number = 0;
  public candidat: Candidat;
  public viewerId: number = 0;
  public ratings: Array<Rating>

  constructor(private activatedRoute: ActivatedRoute, private router: Router,

    private positionService: PositionsService,
    private testService: TestService,
    private viewerService: ViewerService,
    private candidatService: CandidatService) { }

  ngOnInit() {
   // this.rating = new Rating(undefined, undefined, undefined, undefined, undefined);

    this.showLoader();
    this.activatedRoute.params.subscribe(params => {
      var candidatId = params['id'];
      this.viewerId = params['viewerId'];
      console.log(candidatId);
      if (candidatId !== undefined) {

        this.loadCandidat(candidatId);
      }
    }, error => {
      this.hideLoader();
    });

  }

  loadCandidat(candidatId: any): any {
    this.candidatService.get(candidatId).subscribe(res => {
      console.log ('-----------------------------------', res);
      this.candidat = res;

      this.ratings = new Array<Rating>();

      this.candidat.answers.forEach(answ => {

        var rat = new Rating(undefined,undefined,undefined, this.viewerId, answ.id);
        this.ratings.push(rat);

      });

      this.hideLoader();
    }, (error) => {

    });
  }

  public onChange() {
   this.calculateFinalScore();
  }

  public calculateFinalScore() {

    var sum = 0;
    this.ratings.forEach(element => {
      sum = sum + element.grade;
    });

    this.finalSum = sum / this.ratings.length;
  }

  public send() {
      console.log (this.ratings)
  }


  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }

  public goBack() {
    this.router.navigate(['../../../candidat-list/', this.viewerId], { relativeTo: this.activatedRoute });
  }

}
