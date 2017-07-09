import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQmsPublishedComponent } from './page-qms-published.component';

describe('PageQmsPublishedComponent', () => {
  let component: PageQmsPublishedComponent;
  let fixture: ComponentFixture<PageQmsPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQmsPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQmsPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
