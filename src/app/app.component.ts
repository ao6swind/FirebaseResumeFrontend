import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { en_US, zh_TW, NzI18nService } from 'ng-zorro-antd';
import { LanguageService } from './services/language.service';
import { title } from './variables/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent 
{
  public language: string = 'zh-TW';

  constructor
  (
    public router: Router,
    public langService: LanguageService,
    public i18nService: NzI18nService
  ) 
  {
    // 從base href取的當前語言
    this.language = this.langService.getLanguage();
    
    // 設定網頁標題
    document.title = title[this.language];

    // 切換ng-zorro的語系
    switch(this.language)
    {
      case 'zh-TW':
        this.i18nService.setLocale(zh_TW);
        break;
      case 'en-US':
        this.i18nService.setLocale(en_US);
        break;
    }
  }
}
