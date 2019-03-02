import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoslected: any;
  constructor(private service: YoutubeService) {
    this.service.getVideos().subscribe( data => {
      this.videos = data;
    });
   }

  ngOnInit() {
  }
  vervideo(video: any) {
    this.videoslected = video;
    $('#myModal').modal();
  }
  Close() {
    this.videoslected = null;
    $('#myModal').modal('hide');
  }
  Lodaing() {
    this.service.getVideos().subscribe( data => {
      this.videos.push.apply(this.videos, data);
    });
  }
}
