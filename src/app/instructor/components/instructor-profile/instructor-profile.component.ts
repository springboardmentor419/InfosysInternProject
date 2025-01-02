  import { Component, inject, numberAttribute, OnInit } from '@angular/core';
  import { CourseService } from '../../services/course.service';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { ActivatedRoute, Router } from '@angular/router';
  import { InstructorService } from '../../services/instructor.service';



  @Component({
    selector: 'app-instructor-profile',
    standalone: true,
    imports: [FormsModule,CommonModule],
    templateUrl: './instructor-profile.component.html',
    styleUrl: './instructor-profile.component.css'
  })
  export class InstructorProfileComponent implements OnInit{
    courses: any[] = [];
    instructorId!: string;
  
    private coursesService = inject(CourseService);
    private route = inject(ActivatedRoute);
    private instructorService = inject(InstructorService);
    private router = inject(Router)

    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
      if(idParam !== null){
        this.instructorId = idParam;
        console.log(this.instructorId);
      }
      console.log(this.route.snapshot.paramMap.get('id'))
      this.loadCourses();
    }

    loadCourses(): void {
      this.coursesService.getCourses().subscribe(
        (data) => {
          // console.log('Courses loaded:', data); // Debug log
          this.courses = data;
        },
        (error) => {
          console.error('Error loading courses:', error); // Debug log
        }
      );
    }

    deleteCourse(id: number): void {
      this.coursesService.deleteCourse(id).subscribe(
        () => {
          console.log('Course deleted:', id); // Debug log
          this.courses = this.courses.filter((course) => course.id !== id);
        },
        (error) => {
          console.error('Error deleting course:', error); // Debug log
        }
      );
    }

    addCourse(): void {
      const newCourse = {
        courseName: 'New Course',
        courseCode: 'NC101',
        schedule: 'Mar 1 - Mar 10',
        status: 'Upcoming',
        editing: false, // Initialize as not editing
      };

      this.coursesService.addCourse(newCourse).subscribe(
        (course) => {
          console.log('Course added:', course); // Debug log
          this.courses.push(course);
        },
        (error) => {
          console.error('Error adding course:', error); // Debug log
        }
      );
    }

    editCourse(course: any): void {
      course.editing = true;
      console.log('Editing course:', course); // Debug log
    }

    saveCourse(course: any): void {
      console.log('Saving course:', course); // Debug log to check the course data

      const updatedCourse = {
        id: course.id,
        courseName: course.courseName,
        courseCode: course.courseCode,
        schedule: course.schedule,
        status: course.status,
      };

      this.coursesService.updateCourse(updatedCourse.id, updatedCourse).subscribe(
        (updatedCourse) => {
          console.log('Course updated:', updatedCourse); // Debug log to check the updated course
          course.editing = false; // Stop editing mode for this course

          const index = this.courses.findIndex((c) => c.id === updatedCourse.id);
          if (index !== -1) {
            this.courses[index] = updatedCourse;
            console.log('Course updated in list:', this.courses[index]); // Debug log to confirm update
          }
        },
        (error) => {
          console.error('Error updating course:', error); // Debug log to capture any errors
        }
      );
    }

    cancelEdit(course: any): void {
      console.log('Cancel editing course:', course); // Debug log
      this.loadCourses(); // Reload courses to revert any changes
      course.editing = false;
    }

    deleteInstructor(instructorId :string){

      this.instructorService.deleteShortlistedInstructor(instructorId).subscribe({
        next:()=>{
          this.router.navigate(['/available-tutors']);
        }, 
        error:(err) => {
          console.error ("error deleting instructor:",err);
        }
      })
    } 

  }
