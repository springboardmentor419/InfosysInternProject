import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User, email } from '../../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  registerUser(userData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, userData);
  }

  addUserToNewsletter(userEmail: email) {
    return this.http.post(`${this.baseUrl}/newsletteremails`, userEmail);
  }

  getUserDetails(email: string, password: string, user: string): Observable<User[]> {
    var details: Observable<User[]> = this.http.get<User[]>(
      `${this.baseUrl}/${user}?email=${email}&password=${password}`
    );
    details.subscribe({
      next: (response) => {
        if (response.length >= 1) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      }
    });
    return details;
  }

  userAlreadyPresent(email: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users?email=${email}`
    );
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

  logout() {
    this.isLogged = false;
  }
}

