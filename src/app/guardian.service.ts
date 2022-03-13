import {Injectable} from '@angular/core';

import {HttpClient, HttpParams,HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {response} from "express";
@Injectable()
export class GuardianService {

  // baseURL:string = "http://localhost:8080/";
  baseURL:string = "https://guardian-backend-api.herokuapp.com/";

  constructor(private http: HttpClient) {
  }

  getCode(): Observable<any>{
    return this.http.get(this.baseURL + 'code/generate',{responseType:'text'});
  }

}
