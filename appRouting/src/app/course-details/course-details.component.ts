import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIDCourseDEtails();
  }

  getIDCourseDEtails(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
  }

}
