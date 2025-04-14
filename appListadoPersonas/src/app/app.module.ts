import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { LoggingService } from './servicios/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonaComponent,
    AddPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
