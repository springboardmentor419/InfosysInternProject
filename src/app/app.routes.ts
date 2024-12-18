import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './instructor/components/Add_Instructor/instructor-registration/instructor-registration/registration-form/registration-form.component';
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';

export const routes: Routes = [
    {path:'', component:RegistrationFormComponent},
    {
    path:'applicants',component:ListOfApplicantsComponent
    }
];
