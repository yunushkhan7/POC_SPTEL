import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActionPopupComponent } from 'src/app/popup/action-popup/action-popup.component';
import { ValidateFaceComponent } from 'src/app/module/validate-face/validate-face.component';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent {

  constructor(public dialog: MatDialog, private route: Router) {

  }


  onPlaceOrder() {
    const dialogRef = this.dialog.open(ValidateFaceComponent, {
      disableClose: true,
      panelClass: "verification_popup",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== 'home') {
        this.openActionPopup(result);
      } else {
        this.route.navigateByUrl('');
      }

    });

  }

  openActionPopup(result: any) {
    const dialogRef = this.dialog.open(ActionPopupComponent, {
      panelClass: "verification_popup",
      data: result
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
