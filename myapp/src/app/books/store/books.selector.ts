import { createFeatureSelector } from '@ngrx/store/src/selector';
import { Books } from './books';

export const booksSelector = createFeatureSelector<Books[]>('myBooks');
