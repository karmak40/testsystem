import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UrlService {

  public loginUrl: 'api/users';  // url to web api
  public employeeUrl: './api/api/employee';
  public userUrl: './api/api/user';

  constructor( ) { }

  public getHttpHeaders(): HttpHeaders {

    const headers = new HttpHeaders()
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json');
    return headers;
  }

  public getHttpHeaders2(): HttpHeaders {

    const headers = new HttpHeaders()
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json');
    return headers;
  }
}