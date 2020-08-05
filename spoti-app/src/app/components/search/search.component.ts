import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  songs: any[];

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  ngOnInit(): void {
  }

  findItem(text: string): void {
    console.log(text);
    this.spotifyService.findItems(text).subscribe((data: any) => {
      console.log(data);
      this.songs = data;
    });
  }

}
