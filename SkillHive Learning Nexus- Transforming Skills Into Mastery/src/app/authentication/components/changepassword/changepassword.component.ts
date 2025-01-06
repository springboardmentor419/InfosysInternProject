import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterPostData } from '../../../interfaces/auth';
import { confirmPasswordValidator } from '../../../shared/confirm-password.validator';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, ReactiveFormsModule, MatIconModule, CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.scss'
})

export class changePassword implements OnInit {
  changeForm: FormGroup;
  hidePassword = signal(true);
  hideConfirmPassword = signal(true);
  private router = inject(Router);

  constructor(private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: confirmPasswordValidator });
  }

  OnFormSubmit() {
    this.router.navigate(['login']);
    }

  passwordClick(event: Event) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  confirmPasswordClick(event: Event) {
    this.hideConfirmPassword.set(!this.hideConfirmPassword());
    event.stopPropagation();
  }
}


