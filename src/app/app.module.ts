import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './pages/home/title/title.component';
import { HighlightCardComponent } from './pages/home/highlight-card/highlight-card.component';
import { RegularCardComponent } from './components/regular-card/regular-card.component';
import { CardContainerComponent } from './pages/home/card-container/card-container.component';
import { HomeComponent } from './pages/home/home.component';
import { DynamicBlogPageComponent } from './pages/dynamic-blog-page/dynamic-blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HighlightCardComponent,
    RegularCardComponent,
    CardContainerComponent,
    HomeComponent,
    DynamicBlogPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
