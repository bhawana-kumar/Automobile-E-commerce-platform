import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { productManagementService } from "../adminServices/productMangement.service";
import { reportManagementService } from "../adminServices/reportManagement.service";

@Component({
    selector: 'vehicle-details',
    templateUrl: './vehicleDetails.component.html',
    styleUrl: './vehicleDetails.component.css'
})
export class vehicleDetailsComponent {
    vehicleId: string = ''
    vehicleData: any = [];
    reportsData: any = [];
    constructor(private route: ActivatedRoute, private productManagementService: productManagementService, private router: Router,private reportManagementService:reportManagementService) {

    }

    getVehicleDetails() {
        this.productManagementService.getVehicleDataById(this.vehicleId).subscribe((data) => {
            this.vehicleData = data;
            console.log(data);
            if (!data) {
                const url = `/admin/vehicleManagement`;
                this.router.navigateByUrl(url);
            }
        })
    }
    getReportsDetails(){
        this.reportManagementService.getReportsDataByVehicleId(this.vehicleId).subscribe((data)=>{
            this.reportsData = data;
            console.log(data);
        })
    }
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.vehicleId = params['id'];
            this.getVehicleDetails();
            this.getReportsDetails();
        });
    }
}