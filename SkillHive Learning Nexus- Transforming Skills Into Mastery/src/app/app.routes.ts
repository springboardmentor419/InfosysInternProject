import { Routes } from '@angular/router';
import { CandidateLoginComponent } from './candidates/components/candidate-login/candidate-login.component';
import { CandidateRegistrationComponent } from './candidates/components/candidate-registration/candidate-registration.component';
import { CandidateDashboardComponent } from './candidates/components/candidate-dashboard/candidate-dashboard.component';
import { UpdateProfileComponent } from './candidates/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './candidates/components/change-password/change-password.component';

export const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CandidateLoginComponent },
  { path: 'register', component: CandidateRegistrationComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'dashboard', component: CandidateDashboardComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
   { path: 'enrollCourse', component: CandidateDashboardComponent },
    { path: 'manageProfile', component: CandidateDashboardComponent },
    { path: 'trackCourse', component: CandidateDashboardComponent },
    { path: 'recommendedCourses', component: CandidateDashboardComponent },
    { path: 'availableCourses', component: CandidateDashboardComponent },
    { path: 'enrolledCourses', component: CandidateDashboardComponent }
];
