import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
@Component({
  selector: 'app-page-qms-new',
  templateUrl: './page-qms-new.component.html',
  styleUrls: ['./page-qms-new.component.scss']
})
export class PageQmsNewComponent implements OnInit {
    @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
