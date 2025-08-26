import { Component, OnInit } from '@angular/core';
import {  ShortUrlService } from '../../shared/service/short-url.service';
import { ShortUrl } from '../../core/model/shortUrl';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  constructor(private shortUrlService: ShortUrlService) { }
  shortUrls: ShortUrl[] = [];
  ngOnInit(): void {
    this.shortUrlService.getShorts().subscribe({
      next: (shorts) => {
        this.shortUrls = shorts;
      },
      error: (err) => {
        console.error('Error fetching short URLs:', err);
      }
    });
  }

}
