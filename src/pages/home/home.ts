import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public session
  public nombre
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  ionViewDidLoad() {
    setTimeout(() => {
      this.session = JSON.parse(localStorage.getItem('Registro'))
    }, 100)
  }
  borrar(index) {
    this.session = JSON.parse(localStorage.getItem('Registro'))
    this.session.splice(index, 1);
    localStorage.removeItem('Registro');
    localStorage.setItem('Registro', JSON.stringify(this.session));
  }
  editar(index, item) {
    localStorage.setItem('edito', JSON.stringify(item));
    localStorage.setItem('myedit','true');
    let myModal = this.modalCtrl.create(RegistroPage);
    myModal.present();
    console.log('editar', index)
  }
}