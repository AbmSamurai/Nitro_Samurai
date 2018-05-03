import { AuthGuard } from './../services/auth.guard';
import { TeamReviewComponent } from './../components/team-review/team-review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginRegisterComponent } from '../components/login-register/login-register.component';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'dashboard', component: TopNavigationComponent },
  { path: 'team-view/:teamName', component: AppComponent },
  { path: 'review/:teamName', component: TeamReviewComponent},
  { path: 'login', component: LoginRegisterComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting { }
