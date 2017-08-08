import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  textToSearch: string = '';

  constructor( private _spotify: SpotifyService ) { }

  ngOnInit() {}

  searchArtist(){
    this._spotify.getArtists(this.textToSearch)
          .subscribe();
  }
}
