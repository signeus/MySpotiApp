import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artist: any;

  constructor(
              private activatedRoute: ActivatedRoute,
              private _spotify: SpotifyService
             ) { }

  ngOnInit() {
    this.activatedRoute.params.map(parameters => parameters['id']).subscribe( id => {
                                                                      console.log(id);
                                                                      this._spotify.getArtist(id).subscribe( (data: any) => {
                                                                        this.artist = data;
                                                                      });
                                                                    });
  }

}
