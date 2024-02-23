import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: "", component: HeroBannerComponent },
  { path: "admin", component: AdminComponent },
  { path: "signin", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
