import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeadLineResponse } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<HeadLineResponse>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d4f3f9f5e6ca4d5d95ade6852f9d459a`);
  }
}
