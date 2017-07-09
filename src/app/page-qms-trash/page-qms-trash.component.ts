import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
@Component({
  selector: 'app-page-qms-trash',
  templateUrl: './page-qms-trash.component.html',
  styleUrls: ['./page-qms-trash.component.scss'],
  animations: [ fadeInAnimation ]
})
export class PageQmsTrashComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
