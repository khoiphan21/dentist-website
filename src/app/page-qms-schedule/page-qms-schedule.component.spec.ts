import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQmsScheduleComponent } from './page-qms-schedule.component';

describe('PageQmsScheduleComponent', () => {
  let component: PageQmsScheduleComponent;
  let fixture: ComponentFixture<PageQmsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQmsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQmsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
