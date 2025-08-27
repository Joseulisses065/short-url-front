import { Component, OnInit } from '@angular/core';
import {  ShortUrlService } from '../../shared/service/short-url.service';
import { ShortUrl } from '../../core/model/shortUrl';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private shortUrlService: ShortUrlService,private router:Router) { }

  formShort = new FormControl('')
  shortUrls: ShortUrl[] = [];

  encurtarUrl(){
    var urlGet:string = this.formShort.value || ''
    if(urlGet){

          var request = new ShortUrl()
          request.originalUrl = urlGet
          this.shortUrlService.createShort(request).subscribe({
            next: (value) => {
              alert("Salvo com sucesso")
              this.router.navigate(['/links'])
            },
            error:(error)=>{
              alert('erro ao cadastrar')
            }
          })
    }
  }


}
