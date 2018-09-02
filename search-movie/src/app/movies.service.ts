import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movies {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/movies.json';

getConfig() {
  return this.http.get(this.configUrl);
}

}
