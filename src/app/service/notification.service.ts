import { Injectable } from '@angular/core';
import { AppServices } from './app-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private appService : AppServices) { }

  uploadFile(base64String: string, fileExtension: string , notes?:string):Observable<any> {
    const payload = {
      file: base64String,
      extension: fileExtension,
      notes : notes
    };
    return this.appService.saveNotification(payload);
  }
}
