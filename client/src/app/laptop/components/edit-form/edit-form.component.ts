import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { LaptopService } from '../../services/laptop.service';
import { Laptop } from '../../interfaces/laptop.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  laptopForm!: FormGroup;
  inputs: any;
  formControl: any = [];
  // TODO: Chequear los tipados si me queda tiempo
  laptop: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private laptopService: LaptopService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.laptopService.getLaptop(this.activatedRoute.snapshot.params.id)
      .pipe(
        switchMap((laptopResponse) => {
          this.laptop = laptopResponse.laptop;
          return this.laptopService.getIntrospection()
        })
      )
      .subscribe((introspection: any) => {
        introspection = introspection.slice(1);
        introspection.forEach((element: any) => {
          this.formControl[element.name] = new FormControl(this.laptop[element.name]);
          this.laptopForm = new FormGroup(this.formControl);
          this.inputs = introspection;
        });
      });
  }

  onSubmit(): void {
    this.laptopService.createLaptop(this.laptopForm.controls)
    .subscribe((response: any) => console.log(response)
    );
  }

}
