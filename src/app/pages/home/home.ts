import { Component, OnInit } from '@angular/core';
import {  ShortUrlService } from '../../shared/service/short-url.service';
import { ShortUrl } from '../../core/model/shortUrl';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  constructor(private shortUrlService: ShortUrlService) { }

  formShort = new FormControl('')
  shortUrls: ShortUrl[] = [];
  ngOnInit(): void {
   this.reload();
  }
  encurtarUrl(){
    console.log(this.formShort.value)
    var urlGet:string = this.formShort.value || ''
    if(urlGet){
      this.shortUrls.forEach(url => {
        if(url.originalUrl == urlGet){
          alert('url já cadastrada')
        }else{
          var request = new ShortUrl()
          request.originalUrl = urlGet
          this.shortUrlService.createShort(request).subscribe({
            next: (value) => {
              alert("Salvo com sucesso")
              this.reload()
            },
            error:(error)=>{
              alert('erro ao cadastrar')
            }
          })
        }
      });
    }
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

}
