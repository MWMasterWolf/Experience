import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestComponent } from './components/test/test.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CreateLaptopComponent } from './pages/create-laptop/create-laptop.component';
import { EditLaptopComponent } from './pages/edit-laptop/edit-laptop.component';
import { LaptopListComponent } from './pages/laptop-list/laptop-list.component';
import { LaptopDetailComponent } from './pages/laptop-detail/laptop-detail.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TestComponent,
    CreateFormComponent,
    CreateLaptopComponent,
    EditLaptopComponent,
    LaptopListComponent,
    LaptopDetailComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LaptopModule { }
