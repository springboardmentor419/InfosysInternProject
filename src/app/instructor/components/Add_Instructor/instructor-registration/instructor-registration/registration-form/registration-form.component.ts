import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InstructorService } from '../../../../../services/instructor.service';


@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule
    ,HttpClientModule, CommonModule,RouterModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  instructorForm = new FormGroup({
    fullName: new FormControl(''),
    contactNumber: new FormControl(''),
    email: new FormControl(''),
    experience: new FormControl(''),
    teachingDomain: new FormControl(''),
    specialization: new FormControl(''),
    degree: new FormControl(''),
    certifications: new FormControl(''),
    daysAvailable: new FormControl(''),
    hoursAvailable: new FormControl(''),
    resume : new FormControl(null),

  });

 private instructorservice = inject(InstructorService);
  private router = inject(Router)


 onSubmit() {
  const formData = this.instructorForm.value;
  console.log(formData);

  this.instructorservice.submitInstructorData(formData).subscribe({
    next:(response) =>{
      console.log('instructor application submitted', response)
      this.router.navigate(['/successfully-submitted']);
    },
    error:(error) =>{
      console.error("error submitting instructor application ", error);
    }
  }
)
}
}
