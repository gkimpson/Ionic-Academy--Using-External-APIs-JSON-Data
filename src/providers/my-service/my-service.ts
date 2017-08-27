import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MyServiceProvider Provider');
  }

  getData() {
    return this.http.get('https://randomuser.me/api/?result=1').map(data => data.json());
  }

}
