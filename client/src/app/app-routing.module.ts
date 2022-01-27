import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Experience
import { ExperienceListComponent } from './experience/pages/experience-list/experience-list.component';
import { ExperienceDetailComponent } from './experience/pages/experience-detail/experience-detail.component';
import { CreateExperienceComponent } from './experience/pages/create-experience/create-experience.component';
import { EditExperienceComponent } from './experience/pages/edit-experience/edit-experience.component';

import { TestComponent } from './laptop/components/test/test.component';

const routes: Routes = [
  { path: 'experiences', component: ExperienceListComponent },
  { path: 'experience/:id', component: ExperienceDetailComponent },
  { path: 'create', component: CreateExperienceComponent },
  { path: 'edit/:id', component: EditExperienceComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'experiences', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
