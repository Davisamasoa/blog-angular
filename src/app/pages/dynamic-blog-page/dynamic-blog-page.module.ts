import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularCardComponent } from 'src/app/shared/regular-card/regular-card.component';
import { DynamicBlogPageComponent } from './dynamic-blog-page.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [CommonModule, HomeModule],
  declarations: [DynamicBlogPageComponent],
  exports: [DynamicBlogPageComponent],
})
export class DynamicBlogPageModule {}
