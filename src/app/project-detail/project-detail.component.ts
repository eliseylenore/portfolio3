import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project/project.model';
import { ProjectService } from '../project/project.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  projectObservable;


  constructor(
    public route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });

    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
