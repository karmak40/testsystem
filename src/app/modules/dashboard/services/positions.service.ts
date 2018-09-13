import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { Position } from '../models/position';
import { Candidat } from '../models/candidat';
import { Reviewer } from '../models/reviever';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url-service';
import { retryWhen, delayWhen, tap, catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/retryWhen';
//import 'rxjs/add/operator/delay';
//import 'rxjs/add/operator/take';
//import 'rxjs/add/operator/concat';
//import 'rxjs/add/observable/throw';


@Injectable()
export class PositionsService {

  constructor(private http: HttpClient, private url: UrlService) {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    // const dataObject = JSON.parse(TREE_DATA);
  }

  public getdata() {
    return this.mockDatabase();
  }


  public mockDatabase() {
    var database = new Array<Position>();

    var position1 = new Position();
    position1.id = 1231231;
    position1.number = '1231231';
    position1.name = 'Head of Department';
    position1.candidats = new Array<Candidat>()
    var candidat1 = new Candidat();
    candidat1.id = 321312;
    candidat1.name = 'Ron Yuisli';
    position1.candidats.push(candidat1)
    position1.viewers = new Array<Reviewer>()
    var reviever1 = new Reviewer();
    reviever1.id = 3242344231312;
    reviever1.name = 'Dambledor';
    position1.viewers.push(reviever1);
    position1.openDate = new Date();
    position1.status = "true";
    database.push(position1);

    var position2 = new Position();
    position2.number = '23232';
    position2.id = 1231;
    position2.name = 'Engineer';
    position2.candidats = new Array<Candidat>()
    var candidat2 = new Candidat();
    candidat2.id = 321312;
    candidat2.name = 'Harry Potter';
    position2.candidats.push(candidat2)
    position2.viewers = new Array<Reviewer>()
    var reviever2 = new Reviewer();
    reviever2.id = 3242;
    reviever2.name = 'Robert Maslow';
    position2.status = 'true';
    position2.viewers.push(reviever2);

    position2.openDate = new Date()
    position2.openDate;
    position2.status = 'false';
    database.push(position2);
    database.push(position2);
    database.push(position2);
    database.push(position2);
    database.push(position2);
    database.push(position2);

    database.push(position2);
    database.push(position2);
    database.push(position2);

    database.push(position2);
    database.push(position2);
    database.push(position2);

    return database;

  }


  addPosition(json: string): Observable<number> {

    return this.http.put<number>('/api/position/', json,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(result => {
          console.log(result);
          return result;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }


  addDefaultPosition(): Observable<number> {

    return this.http.put<number>('./api/position/',
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(result => {
          console.log(result);
          return result;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

  getPositions(): Observable<Position[]> {

    return this.http.get<Position[]>('./api/position/', 
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(result => {
          console.log(result);
          return result;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

  getPositionDetail(id: number) {
    return this.http.get<Position>('./api/position/' + id,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(result => {
          console.log(result);
          return result;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }



}
