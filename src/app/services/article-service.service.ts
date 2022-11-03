import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { IArticle } from '../interfaces/IArticle';
import { LocalStorageService } from './local-storage-services.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    //get all articels from local storage
    articleList: IArticle[] = this.localStorage.getFromStorage('article') || [];
    cartArticleList: IArticle[] = this.localStorage.getFromStorage('cart-article') || [];
    totalPrice$ = new BehaviorSubject(this.localStorage.getFromStorage('total-price'));
    constructor(
        //use local storage to save and get data
        private localStorage: LocalStorageService
    ) { }

    addArticle(article: IArticle): void {
        //if we refresh page all data is lost, that's why I use local storage
        this.articleList.push(article);
        this.localStorage.setToStorage('article', this.articleList);
    }

    addArticleToCart(article: IArticle) {
        //add cart articles to local storage
        this.cartArticleList.push(article);
        this.localStorage.setToStorage('cart-article', this.cartArticleList);
        this.cartArticleList = this.localStorage.getFromStorage('cart-article') || [];
    }

    checkPrice(CartList: IArticle[]) {
        let totalPrice: number = 0;
        if(CartList){
            CartList.forEach(
                element => {
                    totalPrice += (element.price) * (element.quantity);
                }
            )
        }
        
        console.log(totalPrice);
        this.totalPrice$.next(totalPrice);
        if (this.localStorage.getFromStorage('total-price')) {
            this.localStorage.deleteFromStorage('total-price')
        }
        this.localStorage.setToStorage('total-price', totalPrice)
    }
}