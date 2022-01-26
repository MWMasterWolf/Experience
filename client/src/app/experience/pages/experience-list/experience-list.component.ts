import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { ExperienceService } from '../../services/experience.service';
// Interfaces
import { Experience, ApiResponse } from '../../interfaces/experience.interface';
// Third-party
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getExperiences();
    this.experienceService.refresh();
  }

  getExperiences(): void {
    this.experienceService.getExperiences().subscribe((response: ApiResponse) => this.experiences = response.experiences );
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
