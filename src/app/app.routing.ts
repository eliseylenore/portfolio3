import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
  path:'project/:id',
  component: ProjectDetailComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
