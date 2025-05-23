import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
