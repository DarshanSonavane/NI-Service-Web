import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  file:any;
  notes:any;
  config:any;
  selectedFile: File | null = null;
  base64String: string | null = null;
  fileExtension: string | null = null;
  constructor(private notificationService : NotificationService , private toast : ToastrService , public dialogRef : MatDialogRef<NotificationComponent>){}

  ngOnInit(){}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validExtensions = ['png', 'jpg', 'gif', 'mp4' ,'jpeg'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (!validExtensions.includes(fileExtension || '')) {
        alert('Invalid file type!');
        return;
      }

      if ((fileExtension === 'mp4' || fileExtension === 'gif') && file.size > 1 * 1024 * 1024) { // 1MB
        alert('MP4 file should not be greater than 1MB!');
        return;
      }

      this.fileExtension = fileExtension;

      const reader = new FileReader();
      reader.onloadend = () => {
        this.base64String = reader.result as string;
      };
      reader.readAsDataURL(file);

      this.selectedFile = file;
    }
  }

  uploadFile = () =>{
    try{
      console.log("File", this.base64String);
      console.log("Notes======", this.notes);
      
      this.notificationService.uploadFile(this.base64String, this.fileExtension , this.notes).subscribe(response => {
        console.log('Upload successful:', response);
        this.toast.success("Machine Details Updated Successfully!");
        this.dialogRef.close('submitted');
      }, error => {
        console.error('Upload failed:', error);
      });
    }catch(err){
      console.log(err);
    }
  }
}
