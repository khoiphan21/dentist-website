import { Component, OnInit, HostBinding } from '@angular/core';
import { slideAnimation } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.scss'],
  animations: [ slideAnimation ]
})
export class PageServiceComponent implements OnInit {
  @HostBinding('@transition') transition = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transition = params.transition;
    });
  }

  mouseWheelUpFunc() {
    this.navigationService.navigateSlowly('/welcome/team', 'slidedown');
  }

  mouseWheelDownFunc() {
    this.navigationService.navigateSlowly('/welcome/blog', 'slideup')
  }

}
