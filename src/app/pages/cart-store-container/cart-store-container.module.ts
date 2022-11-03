import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreContainerComponent } from './cart-store-container.component';
import { CartListModule } from 'src/app/components/cart-list/cart-list.module';
import { CartCheckoutModule } from 'src/app/components/cart-checkout/cart-checkout.module';
@NgModule({
  declarations: [CartStoreContainerComponent],
  imports: [
    CommonModule, CartListModule, CartCheckoutModule
  ],
  exports: [CartStoreContainerComponent]
})
export class CartStoreContainerModule { }
