import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HeadLineResponse } from '../models/article';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  pageNumber = 0;

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    this.pageNumber++;
    return this.executeQuery<HeadLineResponse>(`/top-headlines?country=us&page=${this.pageNumber}`);
  }

  getTopHeadlinesByCategory(category: string) {
    return this.executeQuery<HeadLineResponse>(`/top-headlines?country=us&category=${category}`);
  }

    private executeQuery<T>(query: string) {
    return this.http.get<T>(`${apiUrl}${query}`, {headers});
  }

}
