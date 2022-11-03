import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [InventoryListComponent],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [InventoryListComponent]
})
export class InventoryListModule { }
