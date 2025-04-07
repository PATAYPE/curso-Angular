import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { SizerComponent } from './sizer/sizer/sizer.component';
import { FormularioBasicoComponent } from './formularios/formulario-basico/formulario-basico.component';
import { FormPlantillaComponent } from './formularios/form-plantilla/form-plantilla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './formularios/form-control/form-control.component';
import { FormReactivoComponent } from './formularios/form-reactivo/form-reactivo.component';
import { FormPracticeComponent } from './formularios/form-practice/form-practice.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { CursoAddComponent } from './curso/curso-add/curso-add.component';
import { CursoListComponent } from './curso/curso-list/curso-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CalculadoraComponent,
    RegistroComponent,
    SizerComponent,
    FormularioBasicoComponent,
    FormPlantillaComponent,
    FormControlComponent,
    FormReactivoComponent,
    FormPracticeComponent,
    PadreComponent,
    HijoComponent,
    CursoAddComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
