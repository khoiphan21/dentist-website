import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
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
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  isNavigating: boolean = false;

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.slowlyNavigate('/welcome/service');
  }

  mouseWheelDownFunc() {
    this.slowlyNavigate('/welcome/contact')
  }

  slowlyNavigate(link: string) {
    if (!this.navigationService.isNavigationReady()) {
      this.router.navigate([link]);
      this.navigationService.navigate();
    }
  }

}
