import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '../../assets/data/db.json';

  constructor(private http: HttpClient) {}

  getMovies(): any {
    return this.http.get<Movies[]>(`${this.apiUrl}`); }


   getMovieByTitle(title: string): any {
     return this.http
       .get<Movies[]>(`${this.apiUrl}/title/${title}`)
       .pipe(map ( ([ res ]) => res));
   }
}
