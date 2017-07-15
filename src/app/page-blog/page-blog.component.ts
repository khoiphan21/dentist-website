import { Component, OnInit, HostBinding } from '@angular/core';
import { slideAnimation } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss'],
  animations: [ slideAnimation ]
})
export class PageBlogComponent implements OnInit {
  @HostBinding('@transition') transition;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) { }

  isNavigating: boolean = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transition = params.transition;
    });
  }

  mouseWheelUpFunc() {
    this.navigationService.navigateSlowly('/welcome/service', 'slidedown');
  }

  mouseWheelDownFunc() {
    this.navigationService.navigateSlowly('/welcome/contact', 'slideup')
  }

}
