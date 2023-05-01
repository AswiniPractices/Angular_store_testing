import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { BooksReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('myBooks', BooksReducer),
    EffectsModule.forFeature([BooksModule]),
  ],
})
export class BooksModule {}
