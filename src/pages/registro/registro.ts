import { Component} from '@angular/core';
import { IonicPage,NavController,NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  regApp: Array < any > = []
  registro: any = {
    usuario: '',
    contrasena: '',
    nombre: '',
    cedula: '',
    correo: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    if (localStorage.getItem('Registro')) {
      this.registro = JSON.parse(localStorage.getItem('Registro'))
      //this.regApp.push(this.registro)
    }
    console.log('ionViewDidLoad RegistroPage');
  }


  logForm() {
    console.log(this.registro)
      this.regApp.push(this.registro)
      localStorage.setItem('Registro', JSON.stringify(this.regApp));
      this.registro = {
        usuario: '',
        contrasena: '',
        nombre: '',
        cedula: '',
        correo: ''
      }
      //this.navCtrl.push(LoginPage);
  }
  closeModal() {
    this.viewCtrl.dismiss();
    localStorage.removeItem('edito');
  }
}

