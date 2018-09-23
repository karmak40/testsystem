import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../../models/rating';
import { Reviewer } from '../../models/reviever';
import { CandidatService } from '../../services/candidat.service';
import { Candidat } from '../../models/candidat';

@Component({
  selector: 'app-candidat-detail',
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

  public tests: Array<Test> = [];
  public viewers: Array<Reviewer> = [];
  public rating: Array<Rating> = [];
  public loader: boolean = true;
  public candidat: Candidat = new Candidat();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private candidatService: CandidatService) { }

  ngOnInit() {


    this.showLoader()
    this.activatedRoute.params.subscribe(params => {
      var candidatId = params['id'];
      if (candidatId !== undefined) {
        console.log('positionId', candidatId);

        this.loadCandidat(candidatId)

      }
    }, (error) => {
      this.hideLoader();
    });
  }

  loadCandidat(positionId: number): any {

    this.candidatService.get(positionId).subscribe(can => {
      this.candidat = can;
      this.hideLoader();
      console.log(this.candidat);
    }, (error) => {
      this.hideLoader();
    });
  }

  goBack() {
    this.router.navigate(['../../position-detail', this.candidat.positionId], { relativeTo: this.activatedRoute });
  }


  compare(a, b) {
    if (a.nummer < b.nummer)
      return -1;
    if (a.nummer > b.nummer)
      return 1;
    return 0;
  }

  public getCorrectRate(test: Test, viewer: Reviewer) {
    /*var rat = test.rating.find(test => test.viewerId === viewer.id);
    return rat.grade;*/
    return 1;
  }

  public getSumeRate(viewer: Reviewer) {
    /*var res = this.tests.filter(test => test.rating.filter(rat => rat.viewerId == viewer.id))*/

  }

  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }


}
