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
  }


  updatePosition(json: string): Observable<void> {

    return this.http.post<void>('/api/position/', json,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(result => {

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
          return result;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }



}
