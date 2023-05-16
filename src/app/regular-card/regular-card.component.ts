import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-card',
  templateUrl: './regular-card.component.html',
  styleUrls: ['./regular-card.component.scss'],
})
export class RegularCardComponent {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() textContent: string = '';
  @Input() date: string = '';
}
