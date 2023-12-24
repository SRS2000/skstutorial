import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchieveementsComponent } from './achieveements/achieveements.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Contacts',component:ContactComponent},
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'about',component:AboutComponent},
  {path:'achievements',component:AchieveementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
