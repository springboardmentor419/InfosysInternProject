import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-recoverpassword',
  standalone: true,
  imports: [ MatDialogModule, MatFormFieldModule, MatInputModule,  MatButtonModule, ReactiveFormsModule,],
  templateUrl: './recoverpassword.component.html',
  styleUrl: './recoverpassword.component.scss'
})
export class RecoverpasswordComponent {
  recoverForm: FormGroup;
  ngOnInit(): void {
     this.recoverForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
     });
   }

   OnFormSubmit(){
    
   }
}

