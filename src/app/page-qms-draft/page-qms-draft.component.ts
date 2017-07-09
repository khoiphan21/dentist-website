import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
@Component({
  selector: 'app-page-qms-draft',
  templateUrl: './page-qms-draft.component.html',
  styleUrls: ['./page-qms-draft.component.scss'],
  animations: [ fadeInAnimation ]
})
export class PageQmsDraftComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
