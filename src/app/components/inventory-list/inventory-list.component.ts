import { Component, OnInit } from '@angular/core';
import { raceWith } from 'rxjs';
import { IArticle } from 'src/app/interfaces/IArticle';
import { ArticleService } from 'src/app/services/article-service.service';
import { LocalStorageService } from 'src/app/services/local-storage-services.service';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  InventoryList: IArticle[] = []
  CartList: IArticle[] = [];
  constructor(
    private articeService: ArticleService,
    private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.InventoryList = this.articeService.articleList;
    this.CartList = this.articeService.cartArticleList;

  }

  addArticleToCart(article: IArticle): void {
    let exists = false;
    this.CartList.forEach(element => {
      if (element.sku === article.sku) {
        exists = true;
        return;
      }
    })

    if (!exists) {
      const cartArticle: IArticle = Object.assign({}, article);
      cartArticle.quantity = 1;
      this.articeService.addArticleToCart(cartArticle);
      this.InventoryList.forEach(element => {
        if (element === article) {
          element.quantity = element.quantity - 1;
        }
      });
      this.localStorage.deleteFromStorage('article');
      this.localStorage.setToStorage('article', this.InventoryList);
      this.CartList = this.localStorage.getFromStorage('cart-article');
      this.articeService.checkPrice(this.CartList);

    }
    else {
      this.CartList = this.localStorage.getFromStorage('cart-article');
      this.CartList.forEach(element => {
        if(element.sku === article.sku){
          element.quantity = element.quantity + 1;
        }
      })
      this.InventoryList.forEach(element => {
        if (element === article) {
          element.quantity = element.quantity - 1;
        }
      });
      this.localStorage.deleteFromStorage('article');
      this.localStorage.setToStorage('article', this.InventoryList);
      this.localStorage.deleteFromStorage('cart-article');
      this.localStorage.setToStorage('cart-article', this.CartList);
      this.CartList = this.localStorage.getFromStorage('cart-article');
      this.articeService.cartArticleList = this.localStorage.getFromStorage('cart-article');
      this.articeService.checkPrice(this.CartList);

    }
  }

}
