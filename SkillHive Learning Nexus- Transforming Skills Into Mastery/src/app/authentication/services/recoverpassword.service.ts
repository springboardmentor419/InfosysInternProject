import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecoverpasswordComponent } from '../components/recoverpassword/recoverpassword.component';

@Injectable({
  providedIn: 'root',
})
export class recoverPasswordService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(RecoverpasswordComponent,{
      width: '350px',
    });
  }
}