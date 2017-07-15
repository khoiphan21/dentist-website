import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
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
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }


  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.slowlyNavigate('/welcome/team');
  }

  mouseWheelDownFunc() {
    this.slowlyNavigate('/welcome/blog')
  }

  slowlyNavigate(link: string) {
    if (!this.navigationService.isNavigationReady()) {
      this.router.navigate([link]);
      this.navigationService.navigate();
    }
  }

}
