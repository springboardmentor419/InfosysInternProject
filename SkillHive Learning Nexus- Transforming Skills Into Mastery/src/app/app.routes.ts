import { Routes } from '@angular/router';

import { RegistrationFormComponent } from './instructor/components/Add_Instructor/instructor-registration/instructor-registration/registration-form/registration-form.component';
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';
import { InstructorApplyComponent } from './instructor/components/instructor-apply/instructor-apply.component';
import { FormsubmittedComponent } from './instructor/components/formsubmitted/formsubmitted.component';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { ApplyComponent } from './authentication/components/apply/apply.component';
import { AdminComponent } from './authentication/components/admin/admin.component';
import { InstructorComponent } from './authentication/components/instructor/instructor.component';
import { CandidateComponent } from './authentication/components/candidate/candidate.component';
import { routeGuard } from './authentication/guard/auth.guard';
import { CandidateLoginComponent } from './candidates/components/candidate-login/candidate-login.component';
import { CandidateRegistrationComponent } from './candidates/components/candidate-registration/candidate-registration.component';
import { CandidateDashboardComponent } from './candidates/components/candidate-dashboard/candidate-dashboard.component';
import { UpdateProfileComponent } from './candidates/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './candidates/components/change-password/change-password.component';
import { AdminCreateCourseComponent } from './course/components/admin-create-course/admin-create-course.component';
import { AdminViewCoursesComponent } from './course/components/admin-view-courses/admin-view-courses.component';


export const routes: Routes = [
//  {path: '', component:InstructorApplyComponent},
    {path:'form', component:RegistrationFormComponent},
    {
    path:'applicants',component:ListOfApplicantsComponent
    },{
    path:'successfully-submitted',component:FormsubmittedComponent
    },
    {path:'applicants-details',component: InstructorAppliedComponent},
    {path:'available-tutors',component: ListOfApplicantsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'apply', component: ApplyComponent },
    { path: 'admin', component: AdminComponent, canActivate:[routeGuard] },
    { path: 'candidate', component: CandidateComponent, canActivate:[routeGuard]},
    { path: 'instructor', component:  InstructorComponent, canActivate:[routeGuard] },
//  { path: '', redirectTo: 'login', pathMatch: 'full' },
//  { path: '**', redirectTo: 'login', },
    
//    { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', component: CandidateLoginComponent },
  { path: 'register', component: CandidateRegistrationComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'dashboard', component: CandidateDashboardComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  // { path: '', redirectTo: 'view-courses', pathMatch: 'full' },
  { path: 'create-course', component: AdminCreateCourseComponent },
  { path: 'view-courses', component: AdminViewCoursesComponent }

];



