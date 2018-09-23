import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../../dashboard/models/answer';
import { InterviewService } from '../../services/interview.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  @Input() answers: Array<Answer>;

  constructor(private interviewService: InterviewService) { }

  ngOnInit() {
      console.log (this.answers);
  }

  send(){
    console.log (this.answers);

    var json = JSON.stringify(this.answers)
    this.interviewService.update(json).subscribe(res => {

      console.log ('succesfull!');

    }, (error) => {
      //this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });

  }

}
