import { Injectable } from '@angular/core';
import { UrlService } from './url-service';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient, private url: UrlService) { }

  addCandidat(json: string) {

    return this.http.put<Position>('./api/position/', json,
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
