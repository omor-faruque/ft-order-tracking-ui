import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, children:[
    {path: '', component:OrderListComponent, canActivate: [authGuard]},
    {path: 'orders', component:OrderListComponent, canActivate: [authGuard]},
    { path: 'signin', component: SigninComponent }
  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
