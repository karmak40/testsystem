import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewService } from '../../services/interview.service';
import { Observable } from 'rxjs';
import { Answer } from '../../../dashboard/models/answer';
import { InterviewHeaderComponent } from '../interview-header/interview-header.component';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {


  public answers: Array<Answer>;
  public showStartScreen: boolean = false;
  public showTest:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private interviewService: InterviewService) { }


  ngOnInit() {
    // this.answers = new Array<Answer>();

    this.activatedRoute.params.subscribe(params => {
      var ref = params['id'];

      if (ref !== undefined) {
        this.interviewService.get(ref).subscribe(res => {
          this.answers = res;
        
          if (this.answers.length > 0) {
            this.showStartScreen = true;
          }

        }, (error) => {
          //this.hideLoader();
          //this.errorMessageOn(error.message)
          //console.log('error.message');
          return Observable.throw(new Error(error.status));
        });

      }

    });
  }

  public startTest() {
    //todo send to backend start command and starttime
    this.showStartScreen = false;
    this.showTest = true;
  }

}
