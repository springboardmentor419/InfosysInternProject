import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../../filter/filter.component';
import { iselectedFilters } from '../../../models/shortlisted_instrtuctor.model';
import { match } from 'assert';

@Component({
  selector: 'app-list-of-applicants',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './list-of-applicants.component.html',
  styleUrl: './list-of-applicants.component.css'
})
export class ListOfApplicantsComponent implements OnInit{

  instructors: any[] = [];
  filteredInstructors: any[] =[];
  loading: boolean = true;
  filters: iselectedFilters = { ratings:[],subjects:[]};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchInstructors();
  }

  fetchInstructors() {
    this.http.get('http://localhost:3000/shorlistedInstructors').subscribe({
      next: (data: any) => {
        this.instructors = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching instructors:', err);
        this.loading = false;
      },
    });
  }

  onfilterschanged(filter: iselectedFilters){
    this.filters = filter;
    this.applyfilters();
  }

  applyfilters(){
    this.filteredInstructors = this.instructors.filter(instructor =>{
      const matchesRating = !this.filters.ratings.length || this.filters.ratings.some(rating =>{
        const stars = parseInt(rating.split('-')[0],10);
        return instructor.instructorRating >= stars;
      });
      const matchesSubject = !this.filters.subjects.length || this.filters.subjects.includes(instructor.teachingDomain);

      return matchesRating && matchesSubject;
    })
}

}
