import { Injectable } from '@angular/core';
import { PlatformLocation } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private platformLocation: PlatformLocation) 
  { 
    console.log(this.platformLocation.getBaseHrefFromDOM());
  }

  getLanguage(): string
  {
    console.log(this.platformLocation.getBaseHrefFromDOM());
    return (this.platformLocation.getBaseHrefFromDOM() != '/') ? this.platformLocation.getBaseHrefFromDOM().replace(/\//g,'') : 'zh-TW';;
  }

  getBaseHref(): string
  {
    console.log(this.platformLocation.getBaseHrefFromDOM());
    return this.platformLocation.getBaseHrefFromDOM();
  }
}
