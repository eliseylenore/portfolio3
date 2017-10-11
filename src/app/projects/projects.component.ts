import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private productService: ProjectService,
    private router: Router
  ) { }
  projects: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.projects = this.productService.getProjects();
  }

}
