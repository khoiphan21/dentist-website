import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageTeamComponent } from '../page-team/page-team.component';
import { PageHomeComponent } from '../page-home/page-home.component';
import { PageServiceComponent } from '../page-service/page-service.component';
import { PageBlogComponent } from '../page-blog/page-blog.component';
import { PageContactComponent } from '../page-contact/page-contact.component';
import { PageTeamIntroComponent } from '../page-team-intro/page-team-intro.component';
import { PageServiceIntroComponent } from '../page-service-intro/page-service-intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/team/intro', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'intro', component: PageTeamIntroComponent },
  {
    path: 'team', component: PageTeamComponent,
    children: [
      { path: 'intro', component: PageTeamIntroComponent },
    ]
  },
  {
    path: 'service', component: PageServiceComponent,
    children: [
      { path: 'intro', component: PageServiceIntroComponent },
    ]
  },
  { path: 'blog', component: PageBlogComponent },
  { path: 'contact', component: PageContactComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };