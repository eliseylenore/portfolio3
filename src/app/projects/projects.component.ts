import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { AngularFireList } from 'angularfire2/database';
import { ProjectService } from '../project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }
  projects: AngularFireList<any[]>;

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
