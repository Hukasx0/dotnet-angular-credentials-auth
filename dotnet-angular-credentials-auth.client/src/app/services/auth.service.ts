import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this.loadUser();
   }

   private loadUser() {
    const token = localStorage.getItem('token');
    if (token)
      this.getCurrentUser().subscribe();
   }

   register(email: string, username: string, password: string): Observable<any> {
     return this.http.post('/api/Auth/register', { email, username, password });
   }

   login(email: string, password: string): Observable<any> {
    return this.http.post('/api/Auth/login', { email, password }).pipe(
      tap((response: any) => {
        console.log('Login response:', response);
        if (response.token) {
          console.log('Saving token:', response.token);
          localStorage.setItem('token', response.token);
          this.getCurrentUser().subscribe();
        } else {
          console.error('No token in response');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

   getCurrentUser(): Observable<User> {
     return this.http.get<User>('/api/Auth').pipe(
       tap(user => this.currentUserSubject.next(user))
     );
   }

   logout() {
     localStorage.removeItem('token');
     this.currentUserSubject.next(null);
   }


   get currentUser(): Observable<User | null> {
     return this.currentUserSubject.asObservable();
   }

   get isLoggedIn(): boolean {
     return !!this.currentUserSubject.value;
   }
}
