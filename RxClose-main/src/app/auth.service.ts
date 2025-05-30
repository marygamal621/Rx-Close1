import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private  HttpHeaders : HttpHeaders=new HttpHeaders({
  'Accept':'application/json'

})
  constructor(private http: HttpClient) { }
  signUp(rgpdata:any):Observable<any>{
  return this.http.post('https://pharmacybackend-f0ake9fcbcc4bfga.eastasia-01.azurewebsites.net/api/register',rgpdata,{headers:this.HttpHeaders})
}
}


