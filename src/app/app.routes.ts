import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './instructor/components/Add_Instructor/instructor-registration/instructor-registration/registration-form/registration-form.component';
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';
import { InstructorApplyComponent } from './instructor/components/instructor-apply/instructor-apply.component';
import { FormsubmittedComponent } from './instructor/components/formsubmitted/formsubmitted.component';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';

export const routes: Routes = [
    {path: '', component:InstructorApplyComponent},
    {path:'form', component:RegistrationFormComponent},
    {
    path:'applicants',component:ListOfApplicantsComponent
    },{
    path:'successfully-submitted',component:FormsubmittedComponent
    },
    {path:'applicants-details',component: InstructorAppliedComponent},
    {path:'available-tutors',component: ListOfApplicantsComponent}
];
