import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './../../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public language: string;

  constructor
  (
    public router: Router,
    public langService: LanguageService
  ) 
  { 
    this.language = this.langService.getLanguage();
  }

  ngOnInit() {
  }

  redirect(): void
  {
    window.location.href = `/FirebaseResumeFrontend/${this.language}/#/${this.router.url}`;  
  }
}
