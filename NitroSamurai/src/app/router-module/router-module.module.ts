import { AuthGuard } from './../services/auth.guard';
import { TeamReviewComponent } from './../components/team-review/team-review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginRegisterComponent } from '../components/login-register/login-register.component';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TopNavigationComponent, canActivate:[AuthGuard] },
  { path: 'team-view/:teamName', component: AppComponent ,canActivate:[AuthGuard]},
  { path: 'review/:teamName', component: TeamReviewComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginRegisterComponent },
  {path:"**" ,component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting { }
