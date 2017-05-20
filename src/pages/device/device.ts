import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NissanCarPage } from '../nissan-car/nissan-car';
import { ClassicBicyclePage } from '../classic-bicycle/classic-bicycle';
import { RoadBicyclePage } from '../road-bicycle/road-bicycle';
import { NewDevicePage } from '../new-device/new-device';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { HomePage } from '../home/home';

/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {
  Device: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire){
    this.Device = angFire.database.list('/Device');
  }
  goToDevicePage(){
    this.navCtrl.push(NewDevicePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
  signout() {
    this.navCtrl.push(HomePage);
  }


  addnewdevice():void {
    let prompt = this.alertCtrl.create({
        title: 'Device Name and Type',
        message: 'Enter device name and type',
        inputs: [{
          name: 'DeviceName',
          placeholder: "Insert Device Name" 
        },
        {
          name: 'DeviceType',
          placeholder: "Insert Device Type" 
        },
        {
          name: 'DeviceName2',
          placeholder: "Insert Device Security Code" 
        }],
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
            text: "Save Data",
            handler: data => {
              this.Device.push(
                {
                  Name: data.DeviceName,
                  Type: data.DeviceType
                }
              )
            }
          }
        ]
    })

    prompt.present();
  }

  editDevice(Device):void {
    let prompt = this.alertCtrl.create({
        title: 'Edit Device',
        message: 'Edit device name and type',
        inputs: [{
          name: 'DeviceName',
          placeholder: Device.Name 
        },
        {
          name: 'DeviceType',
          placeholder: Device.Type 
        }],
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
            text: "Save Data",
            handler: data => {
              let newName:String = Device.Name;
              let newType:String = Device.Type;
              if(data.Name != ''){
                newName = data.DeviceName;
              }
              if(data.Type != ''){
                newType = data.DeviceType;
              }

              this.Device.update(Device.$key,
                {
                  Name: newName,
                  Type: newType
                }
              )
            }
          }
        ]
    })

    prompt.present();
  }

  deleteDevice(DeviceID):void {
    let prompt = this.alertCtrl.create({
        title: 'Delete Device',
        
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("cancel clicked");
            }
          },
          {
            text: "Delete Data",
            handler: data => {
              this.Device.remove(DeviceID);
  
              
            }
          }
        ]
    })

    prompt.present();
  }

}

