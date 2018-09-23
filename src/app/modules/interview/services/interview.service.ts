import { Injectable } from '@angular/core';

import { UrlService } from '../../dashboard/services/url-service';
import { Observable} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Answer } from '../../dashboard/models/answer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient, private url: UrlService) { }

  public update(json: string) {
    
    return this.http.post<void>('./api/answer/', json,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(_ => {
          console.log("successfull");
        }),
        catchError((err, caught) => {
          console.log('Error updateing answer: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

  public get(id: string): Observable<Answer[]> {

    return this.http.get<Answer[]>('./api/answer/' + id,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(candidat => {
          return candidat;
        }),
        catchError((err, caught) => {
          console.log('Error updating answer: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }
}
