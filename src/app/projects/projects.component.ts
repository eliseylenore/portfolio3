import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { AngularFireList } from 'angularfire2/database';
import { ProjectService } from '../project/project.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectsComponent implements OnInit {
  projects: Observable<any[]>;
  private values: Array<any> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }


  ngOnInit() {
    this.projects = this.projectService.getProjects();

    // let subscription = this.projects.subscribe(
    //       value => this.values.push(value),
    //       error => this.anyErrors = true,
    //       () => this.finished = true
    //   );
  }

  goToDetailPage(clickedProject) {
   this.router.navigate(['project', clickedProject.key]);
 };



}
