import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IAdmins } from './iadmins';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class AdminService {

  private _url: string = "http://localhost:3000/admin/login";

  constructor(private http: HttpClient) { }

   LoginCompany(email: string, password: string) {
    const body = JSON.stringify({ email, password});
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<IAdmins>(this._url, body, httpOptions)
    .shareReplay();
  }

}
