import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogIntroComponent } from './page-blog-intro.component';

describe('PageBlogIntroComponent', () => {
  let component: PageBlogIntroComponent;
  let fixture: ComponentFixture<PageBlogIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
