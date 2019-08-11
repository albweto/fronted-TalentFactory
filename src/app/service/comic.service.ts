import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  PUBLIC_KEY = '';
  HASH = '';

  constructor(private http: HttpClient) { }


   getAllComics(): Observable<any>{
    return this.http.get<any>(`https:gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(map((data: any) => data.data.results))
  }
}
