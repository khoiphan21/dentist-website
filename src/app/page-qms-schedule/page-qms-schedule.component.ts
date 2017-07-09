import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
@Component({
  selector: 'app-page-qms-schedule',
  templateUrl: './page-qms-schedule.component.html',
  styleUrls: ['./page-qms-schedule.component.scss'],
  animations: [ fadeInAnimation ]
})
export class PageQmsScheduleComponent implements OnInit {
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
