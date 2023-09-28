import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-validate-face',
  templateUrl: './validate-face.component.html',
  styleUrls: ['./validate-face.component.scss']
})
export class ValidateFaceComponent {
  step = 1;

  constructor(public dialogRef: MatDialogRef<ValidateFaceComponent>) {
  }

  verifyAge() {
    this.step = 2;
  }

  goToHome(){
    this.dialogRef.close('home');
  }

}
