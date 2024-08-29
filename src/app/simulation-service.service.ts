import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {

  private apiUrl = '';

  constructor(private http: HttpClient) {}

  simulateGames(numSimulations: number, switchDoor: boolean): Observable<any> {
    return this.http.post(this.apiUrl, { numSimulations, switchDoor });
  }
}