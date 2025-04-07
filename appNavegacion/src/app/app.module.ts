import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero/hero.component';
import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './hero/message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailsComponent,
    MessageComponent,
    DashboardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
