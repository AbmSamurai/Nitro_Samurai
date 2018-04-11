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
import { LoginComponent } from './components/login-register/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AppRouting } from './router-module/router-module.module';
import { UiService } from './services/ui.service';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { TeamReviewComponent } from './components/team-review/team-review.component';




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
    DashboardComponent,
    LoginComponent,
    LoginRegisterComponent,
    RegisterComponent,
    TeamRegistrationComponent
    RegisterComponent,
    TeamReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule, 
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,   
  ],
  providers: [
   {provide:ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},AngularFireAuth,DatabaseService,AuthenticationService,UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
