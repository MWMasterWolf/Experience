import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LaptopService } from '../../services/laptop.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  laptopForm!: FormGroup;
  inputs: any;
  formControl: any = [];

  constructor(
    private laptopService: LaptopService
  ) { }

  ngOnInit(): void {
    this.getIntrospection();
  }

  getIntrospection(): void {

    this.laptopService.getIntrospection().subscribe((response: any) => {
      
      response = response.slice(1);
      response.forEach((element: any) => {
        this.formControl[element.name] = new FormControl('');
      });
      
      this.laptopForm = new FormGroup(this.formControl);
      this.inputs = response;
    });
  }

  onSubmit(): void {
    this.laptopService.createLaptop(this.laptopForm.controls)
    .subscribe((response: any) => console.log(response)
    );
  }

}
