import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { slideAnimation } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  // make fade in animation available to this component
  animations: [
    slideAnimation
  ]
})
export class PageHomeComponent implements OnInit {
  @HostBinding('@transition') transition;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) { }

  isNavigating: boolean = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.transition = params.transition;
    });
  }

  mouseWheelDownFunc() {
    this.navigationService.navigateSlowly('/welcome/team', 'slideup')
  }
}
