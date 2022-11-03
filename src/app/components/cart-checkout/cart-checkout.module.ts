import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCheckoutComponent } from './cart-checkout.component';
import {MatIconModule} from '@angular/material/icon';
import { CheckoutListModule } from '../checkout-list/checkout-list.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [CartCheckoutComponent],
  imports: [
    CommonModule, MatIconModule, CheckoutListModule, MatDialogModule
  ],
  exports: [CartCheckoutComponent]
})
export class CartCheckoutModule { }
