import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { ExperienceListComponent } from './pages/experience-list/experience-list.component';
import { CreateExperienceComponent } from './pages/create-experience/create-experience.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';
import { EditExperienceComponent } from './pages/edit-experience/edit-experience.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';



@NgModule({
  declarations: [
    CreateFormComponent,
    EditFormComponent,
    CreateExperienceComponent,
    EditExperienceComponent,
    ExperienceDetailComponent,
    ExperienceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ExperienceModule { }
