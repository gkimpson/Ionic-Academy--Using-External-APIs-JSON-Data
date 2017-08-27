import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: Observable<any>;

  constructor(public navCtrl: NavController, public http: Http) {
    // modify the result on the fly to this.name
     this.name = this.http.get('https://randomuser.me/api?result=1').map(data => data.json());
  }

}
