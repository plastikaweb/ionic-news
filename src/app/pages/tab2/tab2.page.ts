import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

import { Article } from '../../models/article';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild(IonSegment) segment: IonSegment;
  categories = [
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
  ];
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}


  ngAfterViewInit() {
    this.segment.value = this.categories[0];
    this.loadArticles(this.categories[0]);
  }

  categoryChange(event) {
    this.articles = [];
    this.loadArticles(event.detail.value);
  }

  private loadArticles(category: string) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(response => this.articles.push(...response.articles));
  }
}
