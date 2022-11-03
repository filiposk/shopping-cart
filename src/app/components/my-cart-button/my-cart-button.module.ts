import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartButtonComponent } from './my-cart-button.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MyCartButtonComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MyCartButtonComponent]
})
export class MyCartButtonModule { }
