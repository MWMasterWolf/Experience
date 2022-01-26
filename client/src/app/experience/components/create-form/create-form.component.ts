import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../interfaces/experience.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  experienceForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private experienceService: ExperienceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.experienceForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
      createdBy: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // this.experienceService.createExperience(this.experienceForm.controls)
    // .subscribe((response: Experience) => this.router.navigate(['/'])
    // );
  }

}
