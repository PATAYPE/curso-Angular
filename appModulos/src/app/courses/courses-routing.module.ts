import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { AddCoursesComponent } from './pages/add-courses/add-courses.component';


const routes: Routes = [
  {
    path: '',
    component: ListCoursesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
