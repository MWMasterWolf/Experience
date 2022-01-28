import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Laptop } from '../../interfaces/laptop.interface';
import { LaptopService } from '../../services/laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {
  laptop!: Laptop;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private laptopService: LaptopService,
  ) { }

  ngOnInit(): void {
    this.getLaptop(this.activatedRoute.snapshot.params.id);
  }

  getLaptop(id: string): void {
    this.laptopService.getLaptop(id)
      .subscribe((response: ApiResponse) => this.laptop = response.laptop);
  }

  deleteExperience(id: string): void {
    this.laptopService.deleteLaptop(id).subscribe((response: Laptop) => {
      this.laptopService.refresh();
      this.router.navigate(['/laptops']);
    });
  }

}
