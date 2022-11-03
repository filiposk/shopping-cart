import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/IArticle';
import { ArticleService } from 'src/app/services/article-service.service';
import { LocalStorageService } from 'src/app/services/local-storage-services.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CheckoutListComponent } from '../checkout-list/checkout-list.component';
@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {
  CartList: IArticle[] = []
  InventoryList: IArticle[] = [];
  totalPrice: number = 0;
  constructor(
    private articeService: ArticleService,
    private localStorage: LocalStorageService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.articeService.totalPrice$.subscribe(
      (result => {
        console.log(result);
        this.totalPrice = result;
      })
    )
  }

  openCheckout(): void {
    const dialogRef = this.dialog.open(CheckoutListComponent, {
      width: '1200px',
    });
  }

}
