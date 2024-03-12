import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../Home/service/vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  vehicleForm!: FormGroup;
  imageUrl: string | undefined;
  successMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService : VehicleService
  ) { }

  ngOnInit(): void {
    this.vehicleForm = this.formBuilder.group({
      identification_number: ['', Validators.required],
      registration_number: ['', Validators.required],
      location: ['', Validators.required],
      brandName: ['', Validators.required],
      carName: ['', Validators.required],
      manufYear: ['', Validators.required],
      ownerShip: ['', Validators.required],
      driveType: ['', Validators.required],
      carImg: [''],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      price: ['', Validators.required],
      engine: [''],
      power: [''],
      torque: [''],
      fuelType: ['', Validators.required],
      mileage: [''],
      description: [''],
      bodyType: ['', Validators.required]
    });

    const vehicleId = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(vehicleId);
    
    this.vehicleService.getVehicleById(vehicleId).subscribe(vehicle => {
      this.vehicleForm.patchValue(vehicle);
    });
  }

  updateVehicleDetails() {
    if (this.vehicleForm.valid) {
      const updatedVehicle = this.vehicleForm.value;
      const vehicleId = this.route.snapshot.paramMap.get('id') ?? '';
      this.vehicleService.updateVehicle(vehicleId, updatedVehicle).subscribe(
        () => {
          this.successMessage = 'Vehicle details updated successfully.';
          // setTimeout(() => {
          //   this.successMessage = null;
          //   this.router.navigate(['/products']);
          // }, 4000); // Clear success message after 4 seconds and navigate to products page
        },
        error => {
          console.error('Error updating vehicle details:', error);
        }
      );
    } else {
      this.vehicleForm.markAllAsTouched();
    }
  }
 
    onImageSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.imageUrl = undefined;
      }
    }
  }
