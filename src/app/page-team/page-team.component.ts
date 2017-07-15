import { Component, OnInit, HostBinding, trigger } from '@angular/core';
import { animate, AnimationEntryMetadata, state, style, transition } from '@angular/core';
import { slideAnimation } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss'],
  animations: [slideAnimation]
})
export class PageTeamComponent implements OnInit {
  @HostBinding('@transition') transition;
  startingPosition: string;
  isSlideUp = false;
  isSlideDown = false;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
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
    this.navigationService.navigateSlowly('/welcome/home', 'slidedown');
  }

  mouseWheelDownFunc() {
    this.navigationService.navigateSlowly('/welcome/service', 'slideup')
  }
}
