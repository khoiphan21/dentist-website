import { Component, OnInit, HostBinding, trigger } from '@angular/core';
import { slideInDownAnimation, fadeInAnimation } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss'],
  animations: [slideInDownAnimation]
})
export class PageTeamComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.router.navigate(['/welcome/home']);
  }

  mouseWheelDownFunc() {
    this.router.navigate(['/welcome/service']);
  }
}
