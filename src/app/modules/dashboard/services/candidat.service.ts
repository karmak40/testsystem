import { Injectable } from '@angular/core';
import { UrlService } from './url-service';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient, private url: UrlService) { }

  public addCandidat(json: string) {

    return this.http.put<void>('./api/candidat/', json,
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

  public get(id: number): Observable<Candidat> {

    return this.http.get<Candidat>('./api/candidat/' + id,
      { headers: this.url.getHttpHeaders() })
      .pipe(
        tap(candidat => {
          console.log("successfull");
        }),
        catchError((err, caught) => {
          console.log('Error saving position: {0} - {1}', err['status'], err['message']);
          return Observable.throw(err);
        })
      )
  }

}
