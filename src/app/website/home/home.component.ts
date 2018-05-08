import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedItem = Object;
  selectedIdx: number;
  listOfItems: Array<any>;

  // randomColor = () => {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

    constructor() {    }

  ngOnInit() {
    this.selectedIdx = 0;
    this.listOfItems = [
      { name: 'Horoscope', img: 'assets/img/r14.jpg ' },
      { name: 'Astrology',  img: 'assets/img/r14.jpg' },
      { name: 'Vastu',  img: 'assets/img/r14.jpg' },
      { name: 'Pooja',  img: 'assets/img/r14.jpg' },
      { name: 'Reiki',  img: 'assets/img/r14.jpg' },
      { name: 'Palmistry',  img: 'assets/img/r14.jpg' },
      { name: 'Online Courses',  img: 'assets/img/r14.jpg' }
    ];
  }

}
