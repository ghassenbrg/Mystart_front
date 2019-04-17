import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-featured',
  templateUrl: './blog-featured.component.html',
  styleUrls: ['./blog-featured.component.css']
})
export class BlogFeaturedComponent implements OnInit {

  posts = [
    {
      title: "The standard Lorem Ipsum passage, Title 1",
      img: "courses-index-1.png",
      author: "Ghassen Bargougui",
      description: "Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae."
    },
    {
      title: "The standard Lorem Ipsum passage, Title 2",
      img: "courses-index-2.png",
      author: "Youcef Elwaer",
      description: "Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae."
    },
    {
      title: "The standard Lorem Ipsum passage, Title 3",
      img: "courses-index-3.png",
      author: "Khalil Timoumi",
      description: "Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
