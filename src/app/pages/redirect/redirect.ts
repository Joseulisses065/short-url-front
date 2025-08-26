import { ShortUrlService } from './../../shared/service/short-url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.html',
  styleUrl: './redirect.scss'
})
export class Redirect implements OnInit {
  shortId:string = '';
  constructor(private route:ActivatedRoute,private shortService:ShortUrlService) {}

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.shortId = params.get('id') || '';
        if(this.shortId!=''){
          this.shortService.getShortByCode(this.shortId).subscribe({
            next: (shortUrl) => {
              if (shortUrl && shortUrl.originalUrl) {
                window.location.href = shortUrl.originalUrl;
              }
            },
            error: (err) => {
              console.error('Error fetching short URL:', err);
            }
          });
        }

      })}
    }
