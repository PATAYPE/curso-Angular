import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
 {
  path:'',
  loadChildren: () => import('./welcome/welcome.module').then( p => p.WelcomeModule)
 },
 {
  path:'courses',
  loadChildren: () => import('./courses/courses.module').then( p => p.CoursesModule)
 },
 {
  path: 'blog',
  loadChildren: () => import('./blog/blog.module').then( p => p.BlogModule)
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
