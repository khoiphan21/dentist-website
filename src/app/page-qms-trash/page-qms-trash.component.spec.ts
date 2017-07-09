import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQmsTrashComponent } from './page-qms-trash.component';

describe('PageQmsTrashComponent', () => {
  let component: PageQmsTrashComponent;
  let fixture: ComponentFixture<PageQmsTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQmsTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQmsTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
