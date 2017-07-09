import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageTeamComponent } from './page-team/page-team.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageTeamIntroComponent } from './page-team-intro/page-team-intro.component';
import { PageServiceIntroComponent } from './page-service-intro/page-service-intro.component';
import { PageBlogIntroComponent } from './page-blog-intro/page-blog-intro.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PageQMSComponent } from './page-qms/page-qms.component';
import { PageQmsNewComponent } from './page-qms-new/page-qms-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    PageTeamComponent,
    PageHomeComponent,
    PageServiceComponent,
    PageBlogComponent,
    PageContactComponent,
    PageTeamIntroComponent,
    PageServiceIntroComponent,
    PageBlogIntroComponent,
    PageLoginComponent,
    PageWelcomeComponent,
    PageQMSComponent,
    PageQmsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
