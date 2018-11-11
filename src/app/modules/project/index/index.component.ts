import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { LanguageService } from './../../../services/language.service';
import { Project } from './../../../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  public isLoading: boolean = true;
  public language: string = 'zh-TW';
  public subscription: Subscription;
  public projects: AngularFireList<Project>;
  public types    = [];
  public keywords = [];
  public dataSet  = [];

  public isCollapsed: boolean;
  public numMenuWidth: number = 200;

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.numMenuWidth = (event.target.innerWidth > 992) ? 200 : event.target.innerWidth - 70;
  }

  constructor
  (
    public fb: AngularFireDatabase,
    public langService: LanguageService
  ) 
  { 
    this.numMenuWidth = (window.innerWidth > 992) ? 200 : window.innerWidth - 70;
    this.language = this.langService.getLanguage();

    this.projects = this.fb.list(`${this.language}/project`);
    this.subscription = this.projects.snapshotChanges().subscribe(list => {
      this.dataSet = list.map(item => {
        return {
          $key: item.key,
          visible: true,
          project: item.payload.val()
        }
      });

      this.types = list.reduce( (prev, current) => {
        if(prev.indexOf(current.payload.val().type) == -1)
        {
          prev.push(current.payload.val().type);
        }
        return prev;
      }, []);

      this.keywords = list.reduce((prev, current) => {
        for(let i = 0; i <= current.payload.val().keywords.length - 1; i++)
        {
          if(prev.indexOf(current.payload.val().keywords[i].content) == -1)
          {
            prev.push(current.payload.val().keywords[i].content);
          }
        }
        return prev;
      }, []);

      this.isLoading = false;
    });
  }

  ngOnInit() 
  {
    
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  filterType(type: string)
  {
    for(let i = 0; i <=this.dataSet.length - 1; i++)
    {
      this.dataSet[i].visible = true;
      this.dataSet[i].visible = (this.dataSet[i].project.type == type || type == '');
    }
    window.scrollTo(0, 0);
  }

  filterKeyword(keyword: string)
  {
    for(let i = 0; i <= this.dataSet.length - 1; i++)
    {
      this.dataSet[i].visible = false;
      for(let j = 0; j <= this.dataSet[i].project.keywords.length - 1; j++)
      {
        if(this.dataSet[i].project.keywords[j].content == keyword)
        {
          this.dataSet[i].visible = true;
          break;
        }
      }
    }
    window.scrollTo(0, 0);
  }
}
