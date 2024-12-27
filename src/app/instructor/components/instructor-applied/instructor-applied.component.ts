import { Component, inject, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { error } from 'console';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { shortlisted_instructor } from '../../models/shortlisted_instrtuctor.model';
@Component({
  selector: 'app-instructor-applied',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './instructor-applied.component.html',
  styleUrl: './instructor-applied.component.css'
})
export class InstructorAppliedComponent implements OnInit{
  
  private instructorService= inject(InstructorService);


  instructors:any[]=[];
  
  ngOnInit(): void {
    this.instructorService.getInstructor().subscribe({
      next:(data) =>{ 
        this.instructors =data;
        console.log('instructors fetched', this.instructors)
      },
      error:(error)=>{
        console.log('error fetching instructors',error)
      }
    })
  }


rejectInstructor(id:number){
  this.instructors= this.instructors.filter(instructor => instructor.id !==id);

  this.instructorService.deleteInstructor(id).subscribe({
    next: () => {
      console.log(`Instructor with ID ${id} removed successfully`);
    },
    error: (error) => {
      console.log('Error removing instructor:', error);
    }
  })
}

shortlistInstructor(instructor: any): void {
  const shortlistedInstructor: shortlisted_instructor ={
    fullName: instructor.fullName,
    teachingDomain: instructor.teachingDomain,
    upcoming_courses: instructor.upcomingCourses || "Angular complete Guide",
    start_date: instructor.start_date || '24-12-23',
    end_date: instructor.end_date || '24-10-14',
    candidateEnrolled: instructor.candidateEnrolled || 47,
    instructorRating: instructor.instructorRating || 4.5  
  };
  this.instructorService.addToShortlisted(shortlistedInstructor).subscribe({
    next: () => {
      console.log(`Instructor with ID ${instructor.id} shortlisted successfully`);
    },
    error: (error) => {
      console.log('Error shortlisting instructor:', error);
    }
  });
}

}
