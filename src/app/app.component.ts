import { Component } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { NavigationBarComponent } from './instructor/components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavigationBarComponent,HttpClientModule,InstructorAppliedComponent,ListOfApplicantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
