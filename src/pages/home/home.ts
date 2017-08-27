import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
     this.http.get('http://randomuser.me/api?result=1').subscribe(data => {
       console.log("my data: ", data);
     })
  }

}
