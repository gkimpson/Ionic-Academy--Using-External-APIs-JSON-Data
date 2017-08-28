import { myService, User } from './../../providers/my-service/my-service';
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
  myUser: User;
  someVar: Object;

  constructor(public navCtrl: NavController, public myService: myService) {
    // using services for the http calls to make this cleaner
    myService.getData().subscribe(newUser => {
       this.myUser = newUser;
       console.log('my new user :', this.myUser);
    });
  }

}
