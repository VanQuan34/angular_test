import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'read-file';
  title_editor = '<p><strong>read-file</strong></p>';
  editor = ClassicEditor;
  data = '<a class="ck-link_selected" href="https://google.com"><i><strong>OKe</strong></i></a>';

  ngOnInit(){

  }

  handleLoaded(e: any){
    console.log('Loaded');
  }

  getContent(content: any) {
    console.log('Content:', this.title_editor);
  }

  handleOnChangeContent(e: any){
    console.log('e==', e);
    this.title_editor = 'quan';
  }
  
}
