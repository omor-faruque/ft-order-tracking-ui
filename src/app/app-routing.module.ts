import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

const routes: Routes = [
  { path: "", component: HeroBannerComponent },
  { path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
