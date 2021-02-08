import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe((resp) => this.articles.push(...resp.articles));
  }
}
