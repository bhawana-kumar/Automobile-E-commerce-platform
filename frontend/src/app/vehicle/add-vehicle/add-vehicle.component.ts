import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { VehicleService } from '../../Service/vehicle.service';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {


  imageUrl: string='';
  constructor(private service : VehicleService){}

  
 product = new FormGroup({
  "brand" : new FormControl("", Validators.required),
  "model" : new FormControl("", Validators.required),
  "year" : new FormControl("", Validators.required),
  "ownership" : new FormControl("", Validators.required),
  "image" : new FormControl("", Validators.required),
  "color" : new FormControl("", Validators.required),
  "seats" : new FormControl("", Validators.required),
  "price" : new FormControl("", Validators.required),
  "fuel_type" : new FormControl("", Validators.required),
  "mileage": new FormControl("", Validators.required),
  "description": new FormControl("", Validators.required),
  "body_type": new FormControl("", Validators.required)
});



// Define 'onImageSelected' method to handle image selection
  
onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result?.toString() || '';
        this.product.patchValue({
          image: this.imageUrl
        });
      };
      reader.readAsDataURL(file);
    }
  }



addProductDetails(){
  console.log("Added" , this.product.value);
  this.service.saveProductDetails(this.product.value).subscribe(response => {
    console.log(response);
  window.alert('Form submitted successfully!');
  this.product.reset();
  })

}








}
