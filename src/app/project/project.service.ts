import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as Firebase from "firebase";
import { Observable } from 'rxjs/Observable';

//see https://github.com/angular/angularfire2/issues/1180 for help

@Injectable()
export class ProjectService {
  projectsRef: AngularFireList<any>;
  projects: Observable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projectsRef = database.list('projects');
    this.projects = this.projectsRef.valueChanges();
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    // console.log("type: " + typeof(this.database.object('projects/' + projectId).valueChanges()));
    return this.database.object('projects/' + projectId).valueChanges();
  }
}
