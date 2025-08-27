import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environments';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { ShortUrl } from '../../core/model/shortUrl';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  API_URL = environment.apiUrl;
  constructor(private http: HttpClient) {

  }

  getShorts(){
    return this.http.get<ShortUrl[]>(`${this.API_URL}/shotUrls`).pipe(take(1));
  }

  getShortByCode(code: string) {
    return this.http.get<ShortUrl>(`${this.API_URL}/shotUrls/findByShortCode/${code}`).pipe(take(1));
  }

   createShort(url: ShortUrl) {
    return this.http.post<ShortUrl>(`${this.API_URL}/shotUrls`,url).pipe(take(1))
  }
}
