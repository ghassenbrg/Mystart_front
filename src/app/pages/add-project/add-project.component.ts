import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public Editor = ClassicEditor;
  content = '<p>Hello world !</p>';

  constructor() { }

  ngOnInit() {
  }

  btnTest() {
    
  }
}
