import { Injectable, transition } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class NavigationService {
  private isNavigating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isNavigationBusy(): boolean {
    return this.isNavigating;
  }

  navigateSlowly(link: string, transition: string) {
    if (!this.isNavigating){
      this.router.navigate([link, {transition: transition}])
      this.isNavigating = true;
      setTimeout(() => {
        this.isNavigating = false;
      }, 1000)
    }
  }
}
