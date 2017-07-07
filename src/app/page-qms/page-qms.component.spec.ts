import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQMSComponent } from './page-qms.component';

describe('PageQMSComponent', () => {
  let component: PageQMSComponent;
  let fixture: ComponentFixture<PageQMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
