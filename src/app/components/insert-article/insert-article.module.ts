import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertArticleComponent } from './insert-article.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [InsertArticleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [InsertArticleComponent]
})
export class InsertArticleModule { }
