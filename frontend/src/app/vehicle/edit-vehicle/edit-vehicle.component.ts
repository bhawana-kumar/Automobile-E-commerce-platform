import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  vehicle!: FormGroup;
  imageUrl: String | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vehicle = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      ownership: ['', Validators.required],
      image: ['', Validators.required],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      price: ['', Validators.required],
      fuel_type: ['', Validators.required],
      mileage: ['', Validators.required],
      description: ['', Validators.required],
      body_type: ['', Validators.required]
    });

    const productId = this.route.snapshot.paramMap.get('id') ?? '';
    this.productService.getData().subscribe(vehicle => {
      this.vehicle.patchValue(vehicle);
    });
  }

  updateProductDetails() {
    if (this.vehicle.valid) {
      const updatedVehicle = this.vehicle.value;
      const productId = this.route.snapshot.paramMap.get('id') ?? '';
      this.productService.updateProduct(productId, updatedVehicle).subscribe(
        () => {
          console.log('Vehicle details updated successfully.');
          this.router.navigate(['/products']);
        },
        error => {
          console.error('Error updating vehicle details:', error);
        }
      );
    } else {
      this.vehicle.markAllAsTouched();
    }
  }

  onImageSelected(event: any) {
    // Handle image selection here
  }
}

