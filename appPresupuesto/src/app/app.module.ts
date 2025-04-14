import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListIngresosComponent } from './cuentas/list-ingresos/list-ingresos.component';
import { ListEgresosComponent } from './cuentas/list-egresos/list-egresos.component';
import { PresupuestoComponent } from './cuentas/presupuesto/presupuesto.component';
import { FormularioComponent } from './cuentas/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListIngresosComponent,
    ListEgresosComponent,
    PresupuestoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
