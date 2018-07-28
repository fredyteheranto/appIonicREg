import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro'; 
import { HomePage } from '../home/home'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user
  public pass

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  send() {
    var arrayUser = JSON.parse(localStorage.getItem('Registro'))
    var login = ''
    console.log(arrayUser)

    for (let k = 0; k < arrayUser.length; k++) {
      let user = arrayUser[k];
      if (user.contrasena == this.pass) {
        login = user
        localStorage.setItem('session', JSON.stringify(login));
        this.navCtrl.push(HomePage);
      }
    }
  }
  reg() {
    this.navCtrl.push(RegistroPage);
  }

}
