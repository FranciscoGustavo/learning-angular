import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  query(url: string): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD_bEyzQqJUdoL9L6_6lRVOqfOswRR8x7VO_JUt_SM9ZncsaqyusCqzrFmcj20EKoo9BZuNxxQKLxz37UA',
    });
    return this.http.get(`https://api.spotify.com/v1/${url}`, { headers });
  }

  getNewRelease(): any {
    return this.query('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  findItems(text: string): any {
    return this.query(`search?query=${text}&type=artist`)
      .pipe(map((data: any) => data.artists.items));
  }
}
