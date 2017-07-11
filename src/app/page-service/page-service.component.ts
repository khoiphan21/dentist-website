import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class PageServiceComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.router.navigate(['/welcome/team']);
  }

  mouseWheelDownFunc() {
    this.router.navigate(['/welcome/blog']);
  }

}
