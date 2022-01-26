import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience, ApiResponse } from '../../interfaces/experience.interface';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  experienceForm!: FormGroup;
  experience!: Experience

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getExperience(this.activatedRoute.snapshot.params.id);

    this.experienceForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
      createdBy: ['', Validators.required],
    });
  }

  getExperience(id: string): void {
    this.experienceService.getExperience(id)
      .subscribe((response: ApiResponse) => {
        this.experience = response.experience;
        
        this.experienceForm.setValue({
          title: response.experience.title,
          description: response.experience.description,
          content: response.experience.content,
          imageUrl: response.experience.imageUrl,
          createdBy: response.experience.createdBy,
        });
      }
    );
  }

  onSubmit(): void {
    this.experienceService.updateExperience(
      this.activatedRoute.snapshot.params.id, 
      this.experienceForm.controls
    )
      .subscribe((response: Experience) => this.router.navigate(['/']));
  }
}
