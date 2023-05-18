import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBlogPageComponent } from './dynamic-blog-page.component';

describe('DynamicBlogPageComponent', () => {
  let component: DynamicBlogPageComponent;
  let fixture: ComponentFixture<DynamicBlogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBlogPageComponent]
    });
    fixture = TestBed.createComponent(DynamicBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
