import { LanguageService } from './../../../services/language.service';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  public isLoading: boolean = true;
  public $key: string;
  public project: Project = new Project();
  public dataSet = [];
  public projects: AngularFireList<Project>;
  public fb_project: AngularFireObject<Project>;
  public language = 'zh-TW';

  constructor
  (
    public route: ActivatedRoute,
    public router: Router,
    public fb: AngularFireDatabase,
    public langService: LanguageService
  )
  {
    this.language = this.langService.getLanguage();
    this.route.params.subscribe(params => {
      this.fb_project = this.fb.object(`${this.language}/project/${params.id}`);
      this.fb_project.snapshotChanges().subscribe(item => {
        if(item.key == null)
        {
          this.router.navigateByUrl('/project');
        }
        else
        {
          this.project = item.payload.val()
          this.isLoading = false;
        }
      });
    });
  }

  ngOnInit() {
  }

}
