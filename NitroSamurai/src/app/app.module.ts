import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/Auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatabaseService } from './services/database.service';
import { AuthenticationService } from './services/authentication.service';



var config = {
  apiKey: "AIzaSyBl_nMxgOQh4fCkixstzYpvEWVhs4WC7og",
  authDomain: "nitro-samurai.firebaseapp.com",
  databaseURL: "https://nitro-samurai.firebaseio.com",
  projectId: "nitro-samurai",
  storageBucket: "nitro-samurai.appspot.com",
  messagingSenderId: "870754973021"
};


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    TeamViewComponent,
    BottomNavigationComponent,
    CardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule, 
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,   
  ],
  providers: [AngularFireAuth,DatabaseService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
