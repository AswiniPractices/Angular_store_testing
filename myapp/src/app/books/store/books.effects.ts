import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { mergeMap, withLatestFrom } from 'rxjs';
import { BooksService } from '../books.service';
import { booksFetchApiSuccess, invokeBooksApi } from './books.action';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store
  ) {}

  loadAllBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(invokeBooksApi),
        withLatestFrom(this.store.pipe(select(selectBooks)))
      ),
    mergeMap(([, bookformStore]) => {
      if (bookformStore.length > 0) {
        return EMPTY;
      }
      return this.booksService
        .get()
        .pipe(map((data) => booksFetchApiSuccess({ allBooks: data })));
    })
  );
}
