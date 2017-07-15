import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  isNavigating: boolean = false;

  constructor() { }

  isNavigationReady(): boolean {
    return this.isNavigating;
  }

  navigate() {
    this.isNavigating = true;
    setTimeout(() => {
      this.isNavigating = false;
    }, 1500)
  }
}
