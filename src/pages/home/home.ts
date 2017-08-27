import { MyServiceProvider } from './../../providers/my-service/my-service';
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

  constructor(public navCtrl: NavController, public myService: MyServiceProvider) {
    // using services for the http calls to make this cleaner
    this.name = myService.getData();
     
  }

}
