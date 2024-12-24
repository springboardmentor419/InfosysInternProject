import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-admin-view-courses',
  templateUrl: './admin-view-courses.component.html',
  styleUrls: ['./admin-view-courses.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdminViewCoursesComponent implements OnInit {
  courses: any[] = [];
  filterInstructor: string = '';
  filterTechnology: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  filteredCourses() {
    return this.courses.filter(
      (course) =>
        course.instructor.toLowerCase().includes(this.filterInstructor.toLowerCase()) &&
        course.technology.toLowerCase().includes(this.filterTechnology.toLowerCase())
    );
  }
}
