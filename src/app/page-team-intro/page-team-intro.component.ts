import { Component, OnInit, HostBinding } from '@angular/core';
import { horizontalSlideAnimation } from '../animations';

@Component({
  selector: 'app-page-team-intro',
  templateUrl: './page-team-intro.component.html',
  styleUrls: ['./page-team-intro.component.scss'],
  animations: [ horizontalSlideAnimation ]
})
export class PageTeamIntroComponent implements OnInit {
  @HostBinding('@horizontalSlideAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
