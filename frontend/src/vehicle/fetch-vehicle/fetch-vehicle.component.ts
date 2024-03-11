import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Home/service/auth.service'; // Import your authentication service
import { VehicleService } from '../../Home/service/vehicle.service';
import { Vehicle } from '../../../../backend/model/vehiclemodelInt';
import { ActivatedRoute, Route, Router } from '@angular/router'; // Import Router service
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavigationExtras } from '@angular/router';
// import { Vehicle } from 'path/to/vehicle-model';


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
    private router: Router,
    private route: ActivatedRoute// Inject Router service here
  ) { }

  ngOnInit(): void {
    console.log("Print ");

    this.route.paramMap.subscribe(params => {
      const sellerId = params.get('id');
      console.log(sellerId)
      if (sellerId) {
        this.vehicleService.getMyVehicles(sellerId).subscribe((data: Vehicle[]) => {
          this.vehicles = data;
        });
      } else {
        console.error('Seller ID not found in route parameters');
      }
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