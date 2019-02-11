import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UploadFileService} from '../shared/upload-file.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css'],
})
/**
 * This is the form upload component used for uploading a file to the backend server
 */
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  success: String;
  fileName: String;
  @Output() Upload: EventEmitter<any> = new EventEmitter();

  constructor(private uploadService: UploadFileService) {
    this.success = '';
    this.fileName = '';
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles.item(0).name;
  }

  /**
   * This is the actual upload function which calls the upload service to push the file to storage
   */
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);

    //
    if (!this.currentFileUpload.name.includes('.txt')) {
      this.success = 'File is not a text file...try again!';
    } else {
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
          this.success = 'File completely uploaded!';

          // now attempt to display new data
          this.Upload.emit();
        }
      });
    }

    this.selectedFiles = undefined;
  }

}
