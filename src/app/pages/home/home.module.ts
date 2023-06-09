import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContainerComponent } from './card-container/card-container.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { RegularCardComponent } from 'src/app/shared/regular-card/regular-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HomeComponent,
    CardContainerComponent,

    TitleComponent,
    HighlightCardComponent,
    RegularCardComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
