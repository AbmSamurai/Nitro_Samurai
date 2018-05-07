import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/Auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

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
import { TeamRegistrationComponent } from './components/team-registration/team-registration.component';
import { SafePipe } from './services/Pipe/safe.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { TeamNavigationComponent } from './components/team-navigation/team-navigation.component';
import { CacheService } from './services/cache.service';
import { TeamReviewComponent } from './components/team-review/team-review.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./services/auth.guard";
import { CriteriaReviewComponent } from './components/criteria-review/criteria-review.component';
import { CriteriaComponent } from './components/criteria-review/criteria/criteria.component';
import { ReviewComponent } from './components/criteria-review/review/review.component';
import { SprintDetailsComponent } from './components/sprint-details/sprint-details.component';
import { SprintDropdownComponent } from './components/sprint-dropdown/sprint-dropdown.component';





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
    TeamRegistrationComponent,
    SafePipe,
    ModalComponent,
    TeamNavigationComponent,
    TeamReviewComponent,
    NotFoundComponent,
    CriteriaReviewComponent,
    CriteriaComponent,
    ReviewComponent,
    SprintDetailsComponent,
    SprintDropdownComponent,

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
    AngularFireStorageModule, 
  ],
  providers: [
   {provide:ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},AngularFireAuth,DatabaseService,AuthenticationService,UiService, CacheService
  ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
