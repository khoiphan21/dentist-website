import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class PageContactComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.router.navigate(['/welcome/blog']);
  }

}
