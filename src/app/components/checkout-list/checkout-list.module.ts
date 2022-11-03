import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutListComponent } from './checkout-list.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CheckoutListComponent],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [CheckoutListComponent]
})
export class CheckoutListModule { }
