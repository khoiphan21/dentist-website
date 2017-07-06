import { Component, OnInit, HostBinding } from '@angular/core';
import { horizontalSlideAnimation } from '../animations';

@Component({
  selector: 'app-page-blog-intro',
  templateUrl: './page-blog-intro.component.html',
  styleUrls: ['./page-blog-intro.component.scss'],
  animations: [ horizontalSlideAnimation ]
})
export class PageBlogIntroComponent implements OnInit {
  @HostBinding('@horizontalSlideAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
