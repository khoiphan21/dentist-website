import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class PageBlogComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(public router: Router) { }

  ngOnInit() {
  }
  
  mouseWheelUpFunc() {
    this.router.navigate(['/welcome/service']);
  }

  mouseWheelDownFunc() {
    this.router.navigate(['/welcome/contact']);
  }

}
