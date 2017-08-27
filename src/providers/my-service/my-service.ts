import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class User {
  name: String;
  email: String;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class myService {

  constructor(public http: Http) {
    console.log('Hello myService Provider');
  }

  getData() {
    return this.http.get('https://randomuser.me/api/?result=1')
    .map(data => data.json())
    .map(res => {
      return new User(res['results'][0].name.first, res['results'][0].email);
    });    
  }

}
