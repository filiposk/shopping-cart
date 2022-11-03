import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IArticle } from 'src/app/interfaces/IArticle';
import { ArticleService } from 'src/app/services/article-service.service';
import { LocalStorageService } from 'src/app/services/local-storage-services.service';
@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {
  CartList: IArticle[] = []
  InventoryList: IArticle[] = [];
  constructor(
    private articeService: ArticleService,
    private localStorage: LocalStorageService,
    private dialogRef: MatDialogRef<CheckoutListComponent>,
    @Inject(MAT_DIALOG_DATA)
     public data: any,) {
  }

  ngOnInit(): void {
    this.CartList = this.articeService.cartArticleList;
    this.InventoryList = this.articeService.articleList;
  }

  deleteArticle(article: IArticle): void {
    this.CartList.forEach(element => {
      if (element === article) {
        element.quantity = element.quantity - 1;
        if(element.quantity < 1){
          const index = this.CartList.indexOf(element);
          this.CartList.splice(index,1);
        }
      }
    })
    this.localStorage.deleteFromStorage('cart-article');
    this.localStorage.setToStorage('cart-article', this.CartList);
    this.CartList = this.localStorage.getFromStorage('cart-article');
    this.articeService.cartArticleList = this.localStorage.getFromStorage('cart-article');
    this.articeService.checkPrice(this.CartList);

    this.InventoryList.forEach(element => {
      if(element.sku === article.sku){
        element.quantity = element.quantity + 1;
      }
    });
    this.localStorage.deleteFromStorage('article');
    this.localStorage.setToStorage('article', this.InventoryList);
    this.InventoryList = this.localStorage.getFromStorage('article');
    this.articeService.articleList = this.localStorage.getFromStorage('article');
    this.articeService.checkPrice(this.CartList);
  }

  checkout(){
    this.localStorage.deleteFromStorage('cart-article');
    this.articeService.cartArticleList = this.localStorage.getFromStorage('cart-article');
    this.CartList = this.localStorage.getFromStorage('cart-article');
    this.articeService.checkPrice(this.CartList);
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }
}
