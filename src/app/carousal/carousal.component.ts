import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  list = [
    {
      event:' Event 1',
      title:'Welcome to e-Expense!',
      eventDescription:'Keeps track of balances between friends!',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg',
      

    },
     {
      event:' Event 2',
      title:'Add expenses',
      eventDescription:'You can split expenses with groups or with individuals',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg',
      
      
    },
     {
      event:' Event 3',
      title:'Settle up',
      eventDescription:'Pay your friends back any time',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg',
    
    },
     {
      event:' Event 4',
      title:'Enjoy!',
      eventDescription:'Do not worry about management!',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg',
      
    },
    // {
    //   event:' Event 5',
    //   eventLocation:'Berlin',
    //   eventDescription: 'Berlin is best place to hang on',
    //   img: 'https://picsum.photos/900/500?random&t=7',
    //   eventStartDate: new Date('2017/07/10'),
    //   eventEndingDate: new Date('2017/08/14')
    // },
    // {
    //   event:' Event 6',
    //   eventLocation:'Mumbai',
    //   eventDescription:'Mumbai is hub of startups',
    //   img: 'https://picsum.photos/900/500?random&t=8',
    //   eventStartDate: new Date(),
    //   eventEndingDate: new Date()
    // },
    // {
    //   event:' Event 7',
    //   eventLocation:'Barcelona',
    //   eventDescription:'Barcelona is another good city',
    //   img: 'https://picsum.photos/900/500?random&t=6',
    //   eventStartDate: new Date(),
    //   eventEndingDate: new Date()
    // },
  ]

  upcoming_events =  this.list;

  constructor() {
  }

  ngOnInit() {
  }

}