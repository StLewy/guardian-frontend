import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Needy} from "./models/needy";
import {Code} from "./models/code"
import {Guardian} from "./models/guardian";
import {Pairing} from "./models/pairing";


class RequestOptions {

}

@Injectable()
export class GuardianService {

  // baseURL:string = "http://localhost:8080";
  baseURL:string = "https://guardian-backend-api.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  public getCode(): Observable<Code>{
    return this.http.get<Code>(`${this.baseURL}/code/generate`);
  }
  public getAllNeedByStatus(): Observable<Needy[]> {
    return this.http.get<Needy[]>(`${this.baseURL}/needy/all-by-status`);
  }

  public addNeedy(needy: Needy): Observable<Needy>{
    return this.http.post<Needy>(`${this.baseURL}/needy/add`, needy);
  }
  public addGuardian(guardian: Guardian): Observable<Guardian>{
    return this.http.post<Guardian>(`${this.baseURL}/guardian/add`, guardian);
  }

  public addPairing(pairing: Pairing): Observable<Pairing>{
    return this.http.post<Pairing>(`${this.baseURL}/pairing/add`, pairing);
  }
}
