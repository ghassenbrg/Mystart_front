import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  id: any;

  params = {
    title: "",
    description: "",
    path: "Events"
  }

  project: any;

  constructor( private title: Title, private router: Router, private route: ActivatedRoute, public restApi: RestApiService) {
   }

  ngOnInit() {

    let auth = JSON.parse(localStorage.getItem('auth'));

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      return this.restApi.get('project/'+this.id).subscribe((data: {}) => {
        console.log('test: '+data[0].private);
        if (!data[0].published) {
          this.router.navigate(['/404']);
          return;
        }
        if (data[0].private)
          if ((auth.user_id != data[0].author) && (!data[0].authorized.includes(auth.user_id))){
            this.router.navigate(['/events']);
            return;
          }

        this.project = data[0];
        this.params.title = data[0]['title'];
        this.title.setTitle("Mystart | "+data[0]['title']);
      });
    });

  }

  externelPorfilPicUrl(porfilpic) {
    if((porfilpic.search('http://') == -1) && ((porfilpic.search('https://') == -1))) {
      return false;
    }
    return true;
  }

}
