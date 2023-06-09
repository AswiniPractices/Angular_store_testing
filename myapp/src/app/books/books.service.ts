import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './store/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Books[]>('https://localhost:3000/books');
  }
}
