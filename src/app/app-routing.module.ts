import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartStoreContainerComponent } from './pages/cart-store-container/cart-store-container.component';
import { InventoryStoreContainerComponent } from './pages/inventory-store-container/inventory-store-container.component';

const routes: Routes = [
  { path: '', component: InventoryStoreContainerComponent },
  { path: 'my-cart', component: CartStoreContainerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
