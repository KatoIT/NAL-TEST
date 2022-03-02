import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
