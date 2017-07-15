import { Component, OnInit, HostBinding } from '@angular/core';
import { slideAnimation } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations'
import { NavigationService } from '../services/navigation.service';
@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
  animations: [ slideAnimation ]
})
export class PageContactComponent implements OnInit {
  @HostBinding('@transition') transition = true;
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
    this.navigationService.navigateSlowly('/welcome/blog', 'slidedown');
  }
}
