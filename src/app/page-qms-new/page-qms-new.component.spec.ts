import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQmsNewComponent } from './page-qms-new.component';

describe('PageQmsNewComponent', () => {
  let component: PageQmsNewComponent;
  let fixture: ComponentFixture<PageQmsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQmsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQmsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
