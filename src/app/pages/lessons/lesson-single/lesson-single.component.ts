import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsComponent } from '../lessons.component';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-lesson-single',
  templateUrl: './lesson-single.component.html',
  styleUrls: ['./lesson-single.component.css']
})
export class LessonSingleComponent implements OnInit {

  nbr: any;
  lesson: any;
  test = 'https://www.youtube.com/embed/fBNz5xF-Kx4';

  constructor(private route: ActivatedRoute, private parent: LessonsComponent, private restApi: RestApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nbr= params.get('nbr');
      this.parent.nbr = this.nbr;
      this.restApi.get('course/'+this.parent.id+'/lesson/'+this.nbr).subscribe((data: {}) => {
        this.lesson = data;
        this.lesson.videoUrl = '<iframe *ngIf="lesson" width="100%" height="450" src="https://www.youtube.com/embed/'+this.youtube_parser(this.lesson.videoUrl)+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        //this.lesson.videoUrl = "<h1> Hello <strong>world</strong> !</h1>"
      });
    });
  }

  youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  alert(){
    window.alert(this.youtube_parser(this.lesson.videoUrl));
  }
}
