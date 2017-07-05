import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamIntroComponent } from './page-team-intro.component';

describe('PageTeamIntroComponent', () => {
  let component: PageTeamIntroComponent;
  let fixture: ComponentFixture<PageTeamIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTeamIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTeamIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
