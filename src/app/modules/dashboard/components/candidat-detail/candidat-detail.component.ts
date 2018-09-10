import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from '../../models/rating';
import { Reviewer } from '../../models/reviever';

@Component({
  selector: 'app-candidat-detail',
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

  public tests: Array<Test> = [];
  public viewers: Array<Reviewer> = [];
  public rating: Array<Rating> = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {

    var viewer1 = new Reviewer();
    viewer1.id = '1';
    viewer1.nummer = 1;
    viewer1.name = 'John'

    var viewer2 = new Reviewer();
    viewer2.id = '3';
    viewer2.nummer = 3;
    viewer2.name = 'Tohm'

    var viewer3 = new Reviewer();
    viewer3.id = '2';
    viewer3.nummer = 2;
    viewer3.name = 'Jerry'
    this.viewers.push(viewer1, viewer2, viewer3);

    
    this.viewers.sort(this.compare);
    // ------------------------- 

    var rating1 = new Rating();
    rating1.id = '1234';
    rating1.rating = 30;
    rating1.nummer = 1;
    rating1.test_id = '1';
    rating1.viewer_id = '1';

    var rating2 = new Rating();
    rating2.id = '2345';
    rating2.nummer = 2;
    rating2.rating = 20;
    rating2.test_id = '1';
    rating2.viewer_id = '2';

    var rating3 = new Rating();
    rating3.nummer = 3;
    rating3.id = '4322';
    rating3.rating = 80;
    rating3.test_id = '1';
    rating3.viewer_id = '3';


    // -------------------------

    var test1 = new Test();
    test1.id = '1';
    test1.name = 'How are you?'
    test1.answer = 'I am fine thanks!';
    test1.nummer = 'A1'
    test1.rating = []
    test1.rating.push(rating1,rating2,rating3)


    var test2 = new Test();
    test2.id = '2'
    test2.name = 'What is up?'
    test2.answer = 'I am just hanging around';
    test2.nummer = 'A2'
    test2.rating = []
    test2.rating.push(rating1,rating2,rating3)

    var test3 = new Test();
    test3.id = '3'
    test3.name = 'Tell us about yourself'
    test3.answer = 'Well, I’m currently an account executive at Smith, where I handle our top performing client. Before that, I worked at an agency where I was on three different major national healthcare brands. And while I really enjoyed the work that I did, I’d love the chance to dig in much deeper with one specific healthcare company, which is why I’m so excited about this opportunity with Metro Health Center.';
    test3.nummer = 'A3'
    test3.rating = []
    test3.rating.push(rating1,rating2,rating3)

    this.tests.push(test1, test2, test3);
  }

  goBack() {
    this.router.navigate(['../position-detail'], { relativeTo: this.activatedRoute });
  }


  compare(a,b) {
    if (a.nummer < b.nummer)
      return -1;
    if (a.nummer > b.nummer)
      return 1;
    return 0;
  }

  public getCorrectRate(test: Test, viewer: Reviewer) {
    var rat = test.rating.find(test => test.viewer_id === viewer.id);
    return rat.rating;
  }

  public getSumeRate(viewer: Reviewer) {
    var res = this.tests.filter(test => test.rating.filter(rat => rat.viewer_id == viewer.id))
    
  }
  

}
