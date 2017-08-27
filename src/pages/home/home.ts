import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: String;

  constructor(public navCtrl: NavController, public http: Http) {
     this.http.get('https://randomuser.me/api?result=1').subscribe(data => {
       console.log("my data: ", data);
       let myJson = data.json();
       console.log(myJson);

       this.name = myJson['results'][0]['name']['first'];

     })
  }

}
