import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceIntroComponent } from './page-service-intro.component';

describe('PageServiceIntroComponent', () => {
  let component: PageServiceIntroComponent;
  let fixture: ComponentFixture<PageServiceIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageServiceIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServiceIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
