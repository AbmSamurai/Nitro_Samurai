import { TeamReviewComponent } from './../components/team-review/team-review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginRegisterComponent } from '../components/login-register/login-register.component';


export const routes: Routes = [{ path: "", redirectTo: "AppComponent", pathMatch: "full" }, { path: "home", component: AppComponent }, { path: "team-view", component: AppComponent }, { path: "login", component: LoginRegisterComponent }, { path: "dashboard", component: DashboardComponent }, { path: "review/:teamname", component: TeamReviewComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting { }
