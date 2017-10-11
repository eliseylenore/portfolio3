import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as Firebase from "firebase";


@Injectable()
export class ProjectService {
  projects: AngularFireList<any[]>

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }
}
