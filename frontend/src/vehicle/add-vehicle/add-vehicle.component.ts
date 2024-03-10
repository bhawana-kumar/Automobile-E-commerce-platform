import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../Home/service/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'] // Change 'styleUrl' to 'styleUrls'
})
export class AddVehicleComponent {

  imageUrl: string = '';

  constructor(private service: VehicleService) {}

  vehicles = new FormGroup({
    "identification_number": new FormControl("", Validators.required),
    "registration_number": new FormControl("", Validators.required),
    "location": new FormControl("", Validators.required),
    "brandName": new FormControl("", Validators.required), // Change 'brandName' to match the Mongoose schema
    "carName": new FormControl("", Validators.required),
    "manufYear": new FormControl("", Validators.required),
    "ownerShip": new FormControl("", Validators.required), // Change 'ownerShip' to match the Mongoose schema
    "driveType": new FormControl("", Validators.required),
    "carImg": new FormControl("", Validators.required),
    "color": new FormControl("", Validators.required),
    "seats": new FormControl("", Validators.required),
    "price": new FormControl("", Validators.required),
    "engine": new FormControl("", Validators.required),
    "power": new FormControl("", Validators.required),
    "torque": new FormControl("", Validators.required),
    "fuelType": new FormControl("", Validators.required),
    "mileage": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "bodyType": new FormControl("", Validators.required)
  });

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result?.toString() || '';
        this.vehicles.patchValue({
          carImg: this.imageUrl
        });
      };
      reader.readAsDataURL(file);
    }
  }

  addProductDetails() {
    console.log("Added", this.vehicles.value);
    this.service.saveProductDetails(this.vehicles.value).subscribe((response: any) => {
      console.log(response);
      window.alert('Form submitted successfully!');
      this.vehicles.reset();
    });
  }
}
