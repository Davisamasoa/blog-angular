import { Component } from '@angular/core';
import { articles } from 'src/app/data/datablogs';

interface articleI {
  index?: number;
  title: string;
  textContent: string;
  imgSrc: string;
  date: string;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent {
  articles = articles;
}
