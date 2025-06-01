import {Component, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {
  safePdfUrl: SafeResourceUrl | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {
    if (this.data.type === 'application/pdf') {
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.data.content
      );
    }
  }
}
