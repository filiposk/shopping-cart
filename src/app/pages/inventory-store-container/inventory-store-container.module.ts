import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryStoreContainerComponent } from './inventory-store-container.component';
import { InventoryListModule } from 'src/app/components/inventory-list/inventory-list.module';
import { InsertArticleModule } from 'src/app/components/insert-article/insert-article.module';
import { MyCartButtonModule } from 'src/app/components/my-cart-button/my-cart-button.module';
@NgModule({
  declarations: [InventoryStoreContainerComponent],
  imports: [
    CommonModule,InventoryListModule, InsertArticleModule, MyCartButtonModule
  ],
  exports: [InventoryStoreContainerComponent]
})
export class InventoryStoreContainerModule { }
