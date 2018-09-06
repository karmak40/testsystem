import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  public database: Array<Position>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private positionService: PositionsService) {

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.database = this.positionService.getdata();
    
  }

  

}
