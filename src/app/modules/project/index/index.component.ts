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
  public numColumeSize: number = 6;

  @HostListener('window:resize', ['$event'])
  onResize(event) 
  {
    this.numMenuWidth = (event.target.innerWidth > 992) ? 200 : event.target.innerWidth - 50;
    if(event.target.innerWidth < 576)
      this.numColumeSize = 24;
    else if(event.target.innerWidth < 768)
      this.numColumeSize = 12;
    else if(event.target.innerWidth < 1200)
      this.numColumeSize = 8;
    else
      this.numColumeSize = 6;
  }

  constructor
  (
    public fb: AngularFireDatabase,
    public langService: LanguageService
  ) 
  { 
    this.projects = this.fb.list(`${this.language}/project`);
    this.projects.snapshotChanges().subscribe(list => {
      this.dataSet = list.map(item => {
        return {
          $key: item.key,
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

}
