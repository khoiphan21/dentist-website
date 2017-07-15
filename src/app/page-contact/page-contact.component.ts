import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { query } from '@angular/animations'
import { NavigationService } from '../services/navigation.service';
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
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  isNavigating: boolean = false;

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.slowlyNavigate('/welcome/blog');
  }

  slowlyNavigate(link: string) {
    if (!this.navigationService.isNavigationReady()) {
      this.router.navigate([link]);
      this.navigationService.navigate();
    }
  }

}
