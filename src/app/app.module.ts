import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryStoreContainerComponent } from './pages/inventory-store-container/inventory-store-container.component';
import { InventoryStoreContainerModule } from './pages/inventory-store-container/inventory-store-container.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartStoreContainerModule } from './pages/cart-store-container/cart-store-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryStoreContainerModule,
    CartStoreContainerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
