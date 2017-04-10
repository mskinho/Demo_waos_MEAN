import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  article ={};
  private sub: any;
  id: any;

  constructor(private articlesService : ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.articlesService.getArticle(params['id']).subscribe(
            data => {
              console.log(data);
            this.article = data;
      });
    });

  }

}
