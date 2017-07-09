import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQmsDraftComponent } from './page-qms-draft.component';

describe('PageQmsDraftComponent', () => {
  let component: PageQmsDraftComponent;
  let fixture: ComponentFixture<PageQmsDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQmsDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQmsDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
