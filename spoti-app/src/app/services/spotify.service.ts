import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }

  getNewRelease(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDQb2b25gqc63XTnYVUNzJ-hBe2VgRNF9Uf_htH-xnzQIuKHrPla5qkFDsjmewfYpyIBcx7tKNmADHAJZw',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
