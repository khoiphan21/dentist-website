import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router} from '@angular/router';
import { NavigationService } from '../services/navigation.service';

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


  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  isNavigating: boolean = false;

  ngOnInit() {
  }

  mouseWheelDownFunc() {
    this.slowlyNavigate('/welcome/team')
  }

  slowlyNavigate(link: string) {
    if (!this.navigationService.isNavigationReady()) {
      this.router.navigate([link]);
      this.navigationService.navigate();
    }
  }
}
