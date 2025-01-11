import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { AdminComponent } from './authentication/components/admin/admin.component';
import { routeGuard } from './authentication/guard/auth.guard';
import { HomeComponent } from './authentication/components/home/home.component';
import { ContactComponent } from './authentication/components/contact/contact.component';
import { AboutusComponent } from './authentication/components/aboutus/aboutus.component';
import { changePassword } from './authentication/components/changepassword/changepassword.component';
import { InstructorComponent } from './authentication/components/instructor/instructor.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'changepassword', component:  changePassword  },
    { path: 'admin', component: AdminComponent, canActivate:[routeGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'instructor', component: InstructorComponent },
];