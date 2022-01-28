import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Experience
import { ExperienceListComponent } from './experience/pages/experience-list/experience-list.component';
import { ExperienceDetailComponent } from './experience/pages/experience-detail/experience-detail.component';
import { CreateExperienceComponent } from './experience/pages/create-experience/create-experience.component';
import { EditExperienceComponent } from './experience/pages/edit-experience/edit-experience.component';

import { TestComponent } from './laptop/components/test/test.component';
import { CreateLaptopComponent } from './laptop/pages/create-laptop/create-laptop.component';
import { EditLaptopComponent } from './laptop/pages/edit-laptop/edit-laptop.component';
import { LaptopListComponent } from './laptop/pages/laptop-list/laptop-list.component';
import { LaptopDetailComponent } from './laptop/pages/laptop-detail/laptop-detail.component';

const routes: Routes = [
  { path: 'laptops', component: LaptopListComponent },
  { path: 'laptop/:id', component: LaptopDetailComponent },
  { path: 'create', component: CreateLaptopComponent },
  { path: 'edit/:id', component: EditLaptopComponent },
  { path: '', redirectTo: 'laptops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
