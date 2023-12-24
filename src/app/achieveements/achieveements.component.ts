import { Component } from '@angular/core';

@Component({
  selector: 'app-achieveements',
  templateUrl: './achieveements.component.html',
  styleUrls: ['./achieveements.component.scss']
})
export class AchieveementsComponent {

  images=[
    "../../assets/img15.jpg",
    "../../assets/img16.jpg",
    "../../assets/img18.jpg",
    "../../assets/img15.jpg",
    "../../assets/img16.jpg",
    "../../assets/img18.jpg"


  ]
  years=[
    "2017","2018", "2019","2020","2021","2022","2023","2024"
  ]
  names=[
    "soumya","Rohit","Rajesh","Santosh","Harihar","Jagdish"
  ]
  activeIndex: number = -1;

  toggleYearContent(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1; 
    } else {
      this.activeIndex = index;
    }
  }

}
