import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url-service';
import { retryWhen, delayWhen, tap, catchError } from 'rxjs/operators';
import { Reviewer } from '../models/reviever';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private http: HttpClient, private url: UrlService) { }

  public addViewer(json: string) {

    return this.http.put<void>('./api/viewer/', json,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(_ => {
          console.log("successfull");
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

  public getViewer(viewerId: number) {

    return this.http.get<Reviewer>('./api/viewer/' + viewerId,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(res => {
          console.log("successfull");
          return res;
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

}
