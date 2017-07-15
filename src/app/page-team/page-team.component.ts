import { Component, OnInit, HostBinding, trigger } from '@angular/core';
import { slideInDownAnimation, fadeInAnimation } from '../animations';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

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
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  mouseWheelUpFunc() {
    this.slowlyNavigate('/welcome/home');
  }

  mouseWheelDownFunc() {
    this.slowlyNavigate('/welcome/service')
  }

  slowlyNavigate(link: string) {
    if (!this.navigationService.isNavigationReady()) {
      this.router.navigate([link]);
      this.navigationService.navigate();
    }
  }
}
