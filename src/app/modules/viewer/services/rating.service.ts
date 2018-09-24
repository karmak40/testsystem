import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retryWhen, delayWhen, tap, catchError } from 'rxjs/operators';
import { UrlService } from '../../dashboard/services/url-service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient, private url: UrlService) { }


  public addRatings(json: string) {
    
    return this.http.put<void>('./api/rating/', json,
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


}
