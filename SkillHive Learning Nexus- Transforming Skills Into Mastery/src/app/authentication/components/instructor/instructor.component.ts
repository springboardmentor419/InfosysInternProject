import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {
  private auhtService = inject(AuthService);
  private router = inject(Router);
  logout() {
    this.auhtService.logout();
    this.router.navigate(['home']);
  }
}
