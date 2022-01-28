import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, Laptop } from '../../interfaces/laptop.interface';
import { LaptopService } from '../../services/laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(
    private laptopService: LaptopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLaptops();
    this.laptopService.refresh();
  }

  getLaptops(): void {
    this.laptopService.getLaptops().subscribe((response: ApiResponse) => this.laptops = response.laptops );
  }

  deleteLaptop(id: string): void {
    this.laptopService.deleteLaptop(id).subscribe((response: Laptop) => {
      this.laptopService.refresh();
      this.router.navigate(['/laptops']);
    });
  }

}
