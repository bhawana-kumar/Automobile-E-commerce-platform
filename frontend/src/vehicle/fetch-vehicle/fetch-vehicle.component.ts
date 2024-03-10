import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Home/service/auth.service'; // Import your authentication service
import { VehicleService } from '../../Home/service/vehicle.service';
import { Vehicle } from '../../../../backend/Model/vehiclemodel';
import { Router } from '@angular/router'; // Import Router service
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-fetch-vehicle',
  templateUrl: './fetch-vehicle.component.html',
  styleUrls: ['./fetch-vehicle.component.css']
})
export class FetchVehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(
    private authService: AuthService, // Inject your authentication service
    private vehicleService: VehicleService ,
    private router: Router // Inject Router service here
  ) { }

  ngOnInit(): void {
    console.log("Print ");
    
    // Fetch vehicles for the current seller (based on user's session)
       const sellerId = "65e01fd8681a1fd21cf80ba0";
    //  const sellerId = this.authService.getCurrentUser(); // Assuming your authentication service has a method to get the current seller ID
    this.vehicleService.getMyVehicles(sellerId).subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });
  }

  editVehicle(vehicle: Vehicle) {
    // Implement edit functionality
    this.router.navigate(['/edit-product', vehicle._id]);
    console.log('Edit vehicle:', vehicle);
  }

deleteVehicle(vehicle: Vehicle) {
  if (confirm('Are you sure you want to delete this vehicle?')) {
    this.vehicleService.deleteProduct(vehicle._id).subscribe(
      () => {
        const index = this.vehicles.findIndex(v => v._id === vehicle._id);
        if (index !== -1) {
          this.vehicles.splice(index, 1);
        }
        console.log('Vehicle deleted successfully.');
      },
      error => {
        console.error('Error deleting vehicle:', error);
      }
    );
  }
}

}