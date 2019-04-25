import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  events =[
    {
      id: "a4578a4z4",
      title: "Tales from the White House and beyond",
      description: "Lorem Ipsn gravida nibh velalito auctor alipuet. Aenean sollicitudin, lorem quis bibendum auci elit conse ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.",
      day: "Sunday",
      dateD: 15,
      dateM: "December",
      dateT: "9.00 am",
      location: "Monastir, TN",
      organizer: "Google",
      organizerDesc: "Google LLC is an American multinational technology company",
      coverImg: "../../../../assets/images/events/event-grid-1.png",
      organizerPic: "../../../../assets/images/events/author-teacher.png"
    },
    {
      id: "a4578a4z4",
      title: "Lorem Ipsn gravida nibh velalito auctor alipuet",
      description: "Lorem Ipsn gravida nibh velalito auctor alipuet. Aenean sollicitudin, lorem quis bibendum auci elit conse ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.",
      day: "Monday",
      dateD: 28,
      dateM: "April",
      dateT: "14.30 am",
      location: "Sousse, TN",
      organizer: "ISIMM",
      organizerDesc: "Aenean sollicitudin, lorem quis bibendum auci elit",
      coverImg: "../../../../assets/images/events/event-grid-2.png",
      organizerPic: "../../../../assets/images/events/author-teacher.png"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
