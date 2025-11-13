import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceFiles } from '../../services/ServiceFiles';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fileupload',
  imports: [FormsModule, CommonModule],
  
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css',
})
export class FileuploadComponent {
  @ViewChild("cajafilename") fileName!: ElementRef;
  constructor(
    private _service: ServiceFiles
  ) {
    
  }
    sendFileString64(){
      const file = this.fileName.nativeElement.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          const base64 = base64String.split(",")[1]
          this._service.sendFile(file.name, base64).subscribe(() => {
            console.log("Archivo enviado");
          })
        };
        reader.readAsDataURL(file);
      }
      
    }
}
