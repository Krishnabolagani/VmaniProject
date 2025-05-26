import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './model/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
private baseUrl='https://localhost:7233/api/Values';
  constructor(private http:HttpClient) { }
  Post(company:Company):Observable<any>
  {
    return this.http.post(this.baseUrl,company)
  }
  
}
