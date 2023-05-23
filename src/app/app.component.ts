import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  title = 'blog-angular';
  public showAppComponent: boolean = false;

  ngAfterViewChecked(): void {
    this.showAppComponent = true;
  }
}
