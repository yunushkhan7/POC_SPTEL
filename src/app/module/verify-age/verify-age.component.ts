import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionPopupComponent } from 'src/app/popup/action-popup/action-popup.component';

@Component({
  selector: 'app-verify-age',
  templateUrl: './verify-age.component.html',
  styleUrls: ['./verify-age.component.scss']
})
export class VerifyAgeComponent {
  Image: any;
  isLoading: boolean = true;
  constructor(public dialog: MatDialog) {
    this.Image = localStorage.getItem('base64URI')
    this.sendFormData(this.Image)
  }

  convertBase64ToFormData(base64String: string): FormData {
    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    const formData = new FormData();
    formData.append('file', blob, 'filename.bin');
    return formData;
  }

  sendFormData(base64String: string) {
    const formData = this.convertBase64ToFormData(base64String);
    // this.validateServiceService.verifyAge(formData).subscribe((res: any) => {
    setTimeout(() => {
      localStorage.removeItem('base64URI')
      this.isLoading = false;
      const dialogRef = this.dialog.open(ActionPopupComponent, {
        panelClass: 'verification_popup',
        disableClose: true,
        // data: { res },
      });
    }, 3000);

    // }, (err: any) => localStorage.removeItem('base64URI')
    // )
  }
}
