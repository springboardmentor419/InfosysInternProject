import { Component } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';
import { NavBar2Component } from "./instructor/components/nav-bar2/nav-bar2.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NavBar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
