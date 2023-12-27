import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { MoWbSitesListReportSidebarPipeModule } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule,
    CKEditorModule,
    EditorModule,
    FormsModule,
    MoWbSitesListReportSidebarPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
