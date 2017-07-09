import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
@Component({
  selector: 'app-page-qms-published',
  templateUrl: './page-qms-published.component.html',
  styleUrls: ['./page-qms-published.component.scss'],
  animations: [fadeInAnimation]
})
export class PageQmsPublishedComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
