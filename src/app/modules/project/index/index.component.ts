import { LanguageService } from './../../../services/language.service';
import { Project } from './../../../models/project.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  public isLoading: boolean = true;
  public language: string = 'zh-TW';

  public projects: AngularFireList<Project>;
  public types    = [];
  public keywords = [];
  public dataSet  = [];

  public isCollapsed: boolean;
  public numMenuWidth: number = 200;
  public numColumeCount: number = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.numMenuWidth = (event.target.innerWidth > 992) ? 200 : event.target.innerWidth - 70;
    if(event.target.innerWidth < 576)
      this.numColumeCount = 1;
    else if(event.target.innerWidth < 768)
      this.numColumeCount = 5;
    else if(event.target.innerWidth < 1200)
      this.numColumeCount = 3;
    else
      this.numColumeCount = 3;
  }

  constructor
  (
    public fb: AngularFireDatabase,
    public langService: LanguageService
  ) 
  { 
    this.language = this.langService.getLanguage();

    this.projects = this.fb.list(`${this.language}/project`);
    this.projects.snapshotChanges().subscribe(list => {
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

  ngOnInit() {
  }

  showProjects(){
    
  }

  filterType(type: string)
  {
    for(let i = 0; i <=this.dataSet.length - 1; i++)
    {
      this.dataSet[i].visible = true;
      this.dataSet[i].visible = (this.dataSet[i].project.type == type || type == '');
    }
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
  }
}
