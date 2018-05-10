import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/retry';

@Injectable()
export class ApiService implements CanActivate {

  constructor() { }
  canActivate(){
    var val : boolean = localStorage.getItem("loggedIn") == "true";
    return val;
  }
  logInAdmin(){
    localStorage.setItem("loggedIn", "true");
  }
  logOutAdmin(){
    localStorage.clear;
  }
}
