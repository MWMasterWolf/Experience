import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Services
import { ExperienceService } from '../../services/experience.service';
// Interfaces
import { Experience, ApiResponse } from '../../interfaces/experience.interface';
// Third-party
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css'],
})
export class ExperienceDetailComponent implements OnInit {
  experience!: Experience;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private experienceService: ExperienceService,
  ) {}

  ngOnInit(): void {
    this.getExperience(this.activatedRoute.snapshot.params.id);
  }

  getExperience(id: string): void {
    this.experienceService.getExperience(id)
      .subscribe((response: ApiResponse) => this.experience = response.experience);
  }

  deleteExperience(id: string): void {
    this.experienceService.deleteExperience(id).subscribe((response: Experience) => {
      this.experienceService.refresh();
      this.router.navigate(['/experiences']);
      // Swal.fire(
      //   'Deleted!',
      //   'Experience deleted.',
      //   'success'
      // )
    });
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.experienceService.deleteExperience(id).subscribe((response: Experience) => {
    //       this.experienceService.refresh();
    //       this.router.navigate(['/experiences']);
    //       Swal.fire(
    //         'Deleted!',
    //         'Experience deleted.',
    //         'success'
    //       )
    //     });
    //   }
    // })
  }
}
