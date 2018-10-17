import { FooterComponent } from './../partial/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 匯入設定檔
import { environment } from '../../../environments/environment';

// 匯入與Firebase相關的套件
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// ng-zorro相關的套件
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { LoadingComponent } from './../partial/loading/loading.component';
import { HeaderComponent } from '../partial/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgZorroAntdModule
  ],
  declarations: [
    LoadingComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NgZorroAntdModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    LoadingComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }]
})
export class GeneralModule { 
  
}
