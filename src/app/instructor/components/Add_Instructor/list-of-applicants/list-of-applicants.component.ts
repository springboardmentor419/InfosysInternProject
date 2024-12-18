import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-applicants',
  standalone: true,
  imports: [],
  templateUrl: './list-of-applicants.component.html',
  styleUrl: './list-of-applicants.component.css'
})
export class ListOfApplicantsComponent {
  instructors = [
    {
      name: 'Jane Cooper',
      designation: 'Big Data Analytics Instructor',
      course: 'Introduction to Big Data',
      startDate: '2025-01-15',
      enrolled: 45,
      rating: '4.9/5',
    },
    {
      name: 'Jane Smith',
      designation: 'Big Data Analytics Instructor',
      course: 'Introduction to Big Data',
      startDate: '2025-01-15',
      enrolled: 45,
      rating: '4.7/5',
    },
    {
      name: 'Rajesh Kumar',
      designation: 'Big Data Analytics Instructor',
      course: 'Introduction to Big Data',
      startDate: '2025-01-15',
      enrolled: 45,
      rating: '4.4/5',
    },
    {
      name: 'Aman Rana',
      designation: 'Big Data Analytics Instructor',
      course: 'Introduction to Big Data',
      startDate: '2025-01-15',
      enrolled: 45,
      rating: '4.3/5',
    },
  ];
}
