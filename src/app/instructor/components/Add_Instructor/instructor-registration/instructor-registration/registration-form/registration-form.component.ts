import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

 private http = inject(HttpClient);

 onSubmit() {
  const formData = this.instructorForm.value;
  console.log(formData);
  this.http.post('http://localhost:3000/instructors', formData).subscribe(response => {
    console.log('Instructor application submitted:', response);
  });
}
}
