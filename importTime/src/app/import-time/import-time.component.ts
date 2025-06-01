import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DocumentViewerComponent} from "../document-viewer/document-viewer.component";

@Component({
  selector: 'app-import-time',
  templateUrl: './import-time.component.html',
  styleUrls: ['./import-time.component.css']
})
export class ImportTimeComponent {
  constructor(private dialog: MatDialog) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    if (file.type === 'application/pdf') {
      reader.readAsDataURL(file);
    } else if (file.type === 'text/plain') {
      reader.readAsText(file, 'UTF-8');
    } else {
      alert('Desteklenmeyen dosya formatı!');
      return;
    }

    reader.onload = () => {
      this.dialog.open(DocumentViewerComponent, {
        data: {
          content: reader.result,
          type: file.type
        },
        width: '80%',
        height: '90%'
      });
    };
  }

}
