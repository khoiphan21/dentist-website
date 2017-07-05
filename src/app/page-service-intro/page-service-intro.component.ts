import { Component, OnInit, HostBinding } from '@angular/core';
import { horizontalSlideAnimation } from '../animations';

@Component({
  selector: 'app-page-service-intro',
  templateUrl: './page-service-intro.component.html',
  styleUrls: ['./page-service-intro.component.scss'],
  animations: [ horizontalSlideAnimation ]
})
export class PageServiceIntroComponent implements OnInit {
  @HostBinding('@horizontalSlideAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
