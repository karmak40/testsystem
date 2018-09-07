import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import { Position } from '../models/position';
import { Candidat } from '../models/candidat';
import { Reviewer } from '../models/reviever';


@Injectable()
export class PositionsService {

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    // const dataObject = JSON.parse(TREE_DATA);
  }

  public getdata() {
    return this.mockDatabase();
  }

  public mockDatabase () {
      var database = new Array<Position>();
      
      var position1 = new Position();
      position1.id = '12312312';
      position1.name = 'Head of Department';
      position1.candidats = new Array<Candidat>()
        var candidat1 = new Candidat();
        candidat1.id = '321312';
        candidat1.name = 'Ron Yuisli';
      position1.candidats.push(candidat1)
      position1.reviewers = new Array<Reviewer>()
      var reviever1 = new Reviewer();
      reviever1.id = '3242344231312';
      reviever1.name = 'Dambledor';
      position1.reviewers.push(reviever1);
      position1.openDate = new Date();
      position1.active = true;
      database.push(position1);

      var position2 = new Position();
      position2.id = '1231sdfds2312';
      position2.name = 'Engineer';
      position2.candidats = new Array<Candidat>()
        var candidat2 = new Candidat();
        candidat2.id = '321312';
        candidat2.name = 'Harry Potter';
      position2.candidats.push(candidat2)
      position2.reviewers = new Array<Reviewer>()
      var reviever2 = new Reviewer();
      reviever2.id = '3242fsdf312';
      reviever2.name = 'Robert Maslow';
      position2.active = true;
      position2.reviewers.push(reviever2);

      position2.openDate = new Date()
      position2.openDate;
      position2.active = false;
      database.push(position2);
      database.push(position2);
      database.push(position2);



      return database;

  }

  
}
