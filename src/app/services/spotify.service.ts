import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  headers = new Headers();

  artists: any[] = [];

  urlSearch = 'https://api.spotify.com/v1/search';
  urlArtist = 'https://api.spotify.com/v1/artists/';

  constructor( private http: Http ) {
    this.headers.append('authorization', '');
   }

  getArtists(who: string) {
    return this.http.get(this.urlSearch + '?' + `q=${who}&type=artist`, { this.headers })
                .map( res => {
                    this.artists = res.json().artists.items;
                });
  }

  getArtist(id: string) {
    return this.http.get(this.urlArtist + `${id}`, { this.headers })
                .map( res => {
                  return res.json();
                });
  }
}
