import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router} from '@angular/router';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  // make fade in animation available to this component
  animations: [slideInDownAnimation]
})
export class PageHomeComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';


  constructor(public router: Router) { }

  ngOnInit() {
  }

  // mouseWheelUpFunc() {
  //   this.router.navigate(['/welcome/team']);
  // }

  mouseWheelDownFunc() {
    this.router.navigate(['/welcome/team']);
  }
}
