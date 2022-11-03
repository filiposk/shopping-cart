import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/IArticle';
import { ArticleService } from 'src/app/services/article-service.service';
@Component({
  selector: 'app-insert-article',
  templateUrl: './insert-article.component.html',
  styleUrls: ['./insert-article.component.scss']
})
export class InsertArticleComponent implements OnInit {
  skuNumber = '';
  articleName = '';
  articlePrice!: number;
  articleQuantity!: number;
  isButtonDisabled = true;
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  addArticle(): void {
    const article: IArticle = {
      sku: this.skuNumber.toLocaleUpperCase(),
      name: this.articleName,
      price: this.articlePrice,
      quantity: this.articleQuantity
    }
    this.articleService.addArticle(article);
    this.skuNumber = '';
    this.articleName = '',
    this.articlePrice = 0;
    this.articleQuantity;
  }

  checkDisabled(): void {
    if (this.skuNumber && this.articleName && this.articlePrice && this.articleQuantity) {
      this.isButtonDisabled = false;
    }
  }
}
