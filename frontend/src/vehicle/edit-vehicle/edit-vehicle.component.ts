import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../Home/service/product.service';
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
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private VehicleService : VehicleService
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

    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    this.VehicleService.getMyVehicles(productId).subscribe(vehicle => {
      this.vehicleForm.patchValue(vehicle);
    });
  }

  updateProductDetails() {
    if (this.vehicleForm.valid) {
      const updatedVehicle = this.vehicleForm.value;
      const productId = this.route.snapshot.paramMap.get('id') ?? '';
      this.productService.updateProduct(productId, updatedVehicle).subscribe(
        () => {
          this.successMessage = 'Vehicle details updated successfully.';
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['/products']);
          }, 2000); // Clear success message after 4 seconds and navigate to products page
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
    // Handle image selection here
  }
}
