import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;
/*
  Generated class for the NissanCar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nissan-car',
  templateUrl: 'nissan-car.html'
})
export class NissanCarPage {

  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
    let latLng = new google.maps.LatLng(13.7945780,100.3234170);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
