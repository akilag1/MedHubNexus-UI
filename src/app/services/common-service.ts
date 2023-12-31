import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ServiceResponse } from '../models/ServiceResponse';

@Injectable({
    providedIn: 'root',
  })
export class CommonService{

    constructor(
      private http: HttpClient
    ) { }

}