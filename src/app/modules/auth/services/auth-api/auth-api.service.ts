import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private http = inject(HttpClient)
  constructor() { }

  login(){
    return this.http.get('')
  }
}
