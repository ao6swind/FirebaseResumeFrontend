import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from './../../../services/language.service';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Project } from 'src/app/models/project.model';

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
  public subscrtion_router: Subscription;
  public subscrtion_project: Subscription;
  constructor
  (
    public route: ActivatedRoute,
    public router: Router,
    public fb: AngularFireDatabase,
    public langService: LanguageService
  )
  {
    this.language = this.langService.getLanguage();
    this.subscrtion_router = this.route.params.subscribe(params => {
      this.fb_project = this.fb.object(`${this.language}/project/${params.id}`);
      this.subscrtion_project = this.fb_project.snapshotChanges().subscribe(item => {
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

  ngOnInit()
  {

  }

  ngOnDestroy()
  {
    this.subscrtion_router.unsubscribe();
    this.subscrtion_project.unsubscribe();
  }
}
