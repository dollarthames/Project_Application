import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ClassicBicyclePage } from '../pages/classic-bicycle/classic-bicycle';
import { DevicePage } from '../pages/device/device';
import { HelpPage } from '../pages/help/help';
import { LanguagesPage } from '../pages/languages/languages';
import { MenuPage } from '../pages/menu/menu';
import { NewDevicePage } from '../pages/new-device/new-device';
import { NissanCarPage } from '../pages/nissan-car/nissan-car';
import { ProfilePage } from '../pages/profile/profile';
import { RoadBicyclePage } from '../pages/road-bicycle/road-bicycle';
import { SettingPage } from '../pages/setting/setting';
import { SignupPage } from '../pages/signup/signup';
import { TrackerPage } from '../pages/tracker/tracker';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
    apiKey: "AIzaSyAD2fVh7aFd-75Rh_FAk4WZVW3LpfjHnqQ",
    authDomain: "thamesionic.firebaseapp.com",
    databaseURL: "https://thamesionic.firebaseio.com",
    projectId: "thamesionic",
    storageBucket: "thamesionic.appspot.com",
    messagingSenderId: "904662333183"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClassicBicyclePage,
    DevicePage,
    HelpPage,
    LanguagesPage,
    MenuPage,
    NewDevicePage,
    NissanCarPage,
    ProfilePage,
    RoadBicyclePage,
    SettingPage,
    SignupPage,
    TrackerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClassicBicyclePage,
    DevicePage,
    HelpPage,
    LanguagesPage,
    MenuPage,
    NewDevicePage,
    NissanCarPage,
    ProfilePage,
    RoadBicyclePage,
    SettingPage,
    SignupPage,
    TrackerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
