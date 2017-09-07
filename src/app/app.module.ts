import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCE88qJZ-sAcHxWohNbRiDnl3_n3H_kvXI",
  authDomain: "simplechat-176f9.firebaseapp.com",
  databaseURL: "https://simplechat-176f9.firebaseio.com",
  projectId: "simplechat-176f9",
  storageBucket: "",
  messagingSenderId: "923280181379"
};


  @NgModule({
    declarations: [
      MyApp,
      HomePage,
      ChatPage,

    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(config),
      AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage,
      ChatPage
    ],
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })
  export class AppModule {}
