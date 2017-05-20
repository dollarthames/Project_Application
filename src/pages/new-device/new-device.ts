import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NissanCarPage } from '../nissan-car/nissan-car';
/*
  Generated class for the NewDevice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-device',
  templateUrl: 'new-device.html'
})
export class NewDevicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDevicePage');
  }
  goToMapPage(){
    this.navCtrl.push(NissanCarPage);

}
}
