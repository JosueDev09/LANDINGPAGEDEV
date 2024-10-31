import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/emailModels';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string = environment.apiUrl;
  constructor(private https:HttpClient) { }

  sendEmail(email:Email):Observable<Email> {
    return this.https.post<Email>(this.url +'Email/SaveEmail',email);
  }
}
