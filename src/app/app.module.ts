import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { AdminComponent } from './components/admin/admin.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroBannerComponent,
    TrackingComponent,
    AdminComponent,
    SigninComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
