import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [CartListComponent]
})
export class CartListModule { }
