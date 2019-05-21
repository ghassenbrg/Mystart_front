import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-single',
  templateUrl: './course-single.component.html',
  styleUrls: ['./course-single.component.css']
})
export class CourseSingleComponent implements OnInit {

  params = {
    title: "This is My first title",
    description: "",
    path: "Courses"
  }

  lessons = ['Introduction Lesson', 'Basics of HTML', 'Getting Know about HTML', 'Tags and Attributes', 
             'Basics of CSS', 'Getting Familiar with CSS', 'Introduction to Bootstrap', 'Responsive Design'];

  attachments = ['objectives.pdf', 'summary.ppt', 'book.docx'];

  constructor() { }

  ngOnInit() {
  }

}
