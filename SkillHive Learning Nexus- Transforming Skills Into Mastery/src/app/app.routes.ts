import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { ApplyComponent } from './authentication/components/apply/apply.component';
import { AdminComponent } from './authentication/components/admin/admin.component';
import { InstructorComponent } from './authentication/components/instructor/instructor.component';
import { CandidateComponent } from './authentication/components/candidate/candidate.component';
import { routeGuard } from './authentication/guard/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'apply', component: ApplyComponent },
    { path: 'admin', component: AdminComponent, canActivate:[routeGuard] },
    { path: 'candidate', component: CandidateComponent, canActivate:[routeGuard]},
    { path: 'instructor', component:  InstructorComponent, canActivate:[routeGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', },
];