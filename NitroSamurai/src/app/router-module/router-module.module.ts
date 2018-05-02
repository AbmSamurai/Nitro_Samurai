import { AuthGuard } from './../services/auth.guard';
import { TeamReviewComponent } from './../components/team-review/team-review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginRegisterComponent } from '../components/login-register/login-register.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


export const routes: Routes = [{ path: "", redirectTo: "login", pathMatch: "full" }, { path: "home", component: AppComponent }, { path: "team-view", component: AppComponent, canActivate: [AuthGuard] }, { path: "login", component: LoginRegisterComponent }, { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] }, { path: "review/:teamname", component: TeamReviewComponent, canActivate: [AuthGuard] }, { path: "**", component: NotFoundComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting { }
