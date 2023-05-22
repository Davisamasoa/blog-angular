import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from 'src/app/data/datablogs';

@Component({
  selector: 'app-dynamic-blog-page',
  templateUrl: './dynamic-blog-page.component.html',
  styleUrls: ['./dynamic-blog-page.component.scss'],
})
export class DynamicBlogPageComponent implements OnInit {
  slug: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.slug = Number(this.route.snapshot.paramMap.get('id'));

    this.slug > +this.articles.length ? this.router.navigate(['/']) : undefined;
  }

  articles = articles;
}
