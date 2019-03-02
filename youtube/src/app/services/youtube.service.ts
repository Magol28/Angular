import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  url = 'https://www.googleapis.com/youtube/v3';
  apikey = '';
  constructor(public http: HttpClient) { }
  nextpage = '';
  getVideos(): any {
    const url = `${this.url}/playlistItems`;
    console.log(url);
    let params = new HttpParams();

    params = params.append('part', 'snippet');
    params = params.append('maxResults', '10');
    params = params.append('playlistId', 'UUJUmE61LxhbhudzUugHL2wQ');
    params = params.append('key', this.apikey);
    if (this.nextpage) {
      params = params.append('pageToken', this.nextpage);
    }
    return this.http.get(url, { params: params }).pipe(
      map(res => {
        this.nextpage = (res['nextPageToken']);
        return res['items'];
      }));
  }
}
