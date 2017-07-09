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
import { PageBlogIntroComponent } from '../page-blog-intro/page-blog-intro.component';
import { PageLoginComponent } from '../page-login/page-login.component';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';
import { PageQMSComponent } from '../page-qms/page-qms.component';
import { PageQmsNewComponent } from '../page-qms-new/page-qms-new.component';
import { PageQmsDraftComponent } from '../page-qms-draft/page-qms-draft.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome/home', pathMatch: 'full' },
  {
    path: 'welcome', component: PageWelcomeComponent,
    children: [
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
      {
        path: 'blog', component: PageBlogComponent,
        children: [
          { path: 'intro', component: PageBlogIntroComponent },
        ]
      },
      { path: 'contact', component: PageContactComponent },
    ]
  },
  // { path: 'home', component: PageHomeComponent },

  { path: 'admin', component: PageLoginComponent },
  {
    path: 'QMS', component: PageQMSComponent,
    children: [
      { path: 'new', component: PageQmsNewComponent },
      { path: 'draft', component: PageQmsDraftComponent },
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
