import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showComponent: boolean = false;

  constructor() {
    setTimeout(() => {
      this.showComponent = true;
    }, 50);
  }
}
