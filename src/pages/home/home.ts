import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DevicePage } from '../device/device';
import { AuthService } from '../../providers/auth-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, private _auth: AuthService) {
    this.items = db.list('/items');
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
    .then(() => this.onSignInSuccess());
    
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth.displayName());
    this.navCtrl.setRoot(DevicePage);
  }
  goToHomePage(){
    this.navCtrl.setRoot(DevicePage);
  }

}