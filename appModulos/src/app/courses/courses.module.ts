import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { AddCoursesComponent } from './pages/add-courses/add-courses.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListCoursesComponent, AddCoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
