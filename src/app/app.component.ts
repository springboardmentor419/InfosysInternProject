import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructorApplyComponent } from './instructor/components/instructor-apply/instructor-apply.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InstructorApplyComponent], // Make sure this is correct
  template: `<app-instructor-apply></app-instructor-apply>`, // Use the component selector
  styleUrls: ['./app.component.css']
})
export class AppComponent {}