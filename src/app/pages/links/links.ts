import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../shared/service/short-url.service';
import { ShortUrl } from '../../core/model/shortUrl';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  imports: [RouterModule],
  templateUrl: './links.html',
  styleUrl: './links.scss'
})
export class Links  implements OnInit {
  constructor(private shortUrlService: ShortUrlService) { }

  shortUrls: ShortUrl[] = [];
  ngOnInit(): void {
   this.reload();
  }
  reload(){
    this.shortUrlService.getShorts().subscribe({
       next: (shorts) => {
        this.shortUrls = shorts;
      },
      error: (err) => {
        console.error('Error fetching short URLs:', err);
      }
    })

  }
  copyToClipboard(text:string) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Link copiado para a área de transferência!");
      }).catch(err => {
        alert("Erro ao copiar: " + err);
      });
    }

}
