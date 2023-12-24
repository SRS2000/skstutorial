import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CourseComponent } from './course/course.component';
import { AchieveComponent } from './achieve/achieve.component';
import { PortionComponent } from './portion/portion.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { AchieveementsComponent } from './achieveements/achieveements.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    WelcomeComponent,
    CourseComponent,
    AchieveComponent,
    PortionComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    AchieveementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
