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

  loadData(event) {
    this.loadArticles(this.segment.value, event);
  }

  private loadArticles(category: string, event?) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(resp => {
      this.articles.push(...resp.articles);

      if (resp.totalResults <= this.articles.length) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      if (event) {
        event.target.complete();
      }
    });
  }
}
