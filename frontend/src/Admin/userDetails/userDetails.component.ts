import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { customerManagementService } from "../adminServices/customerManagement.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { orderManagementService } from "../adminServices/orderManagement.service";
import { productManagementService } from "../adminServices/productMangement.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertModalComponent } from "../alertModal/alertModal.component";

@Component({
  selector: 'userDetails-component',
  templateUrl: './userDetails.component.html',
  styleUrls: [
    '../../assets/bootstrap.min.css',
    './userDetails.component.css'
  ],
  encapsulation: ViewEncapsulation.Emulated
}) export class userDetailsComponent implements OnInit {
  userId: string = ''
  userdata: any = [];
  userOrders: any = [];
  userVehicles: any = [];
  activeTab: string = 'profile';
  userRole: string = 'buyer';
  accountStatus: string = 'active';
  userOrdersLoaded: boolean = false;
  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private customerManService: customerManagementService
    ,private orderManagementService: orderManagementService,private productManagementService:productManagementService, public dialog:MatDialog) {

  }
 


 


  getUserDetails() {
    this.customerManService.getUserDataById(this.userId).subscribe((data) => {
      this.userdata = data;
      //setting variables
      console.log(data);
      this.userRole = this.userdata.role;
      if (this.userdata.status == 'block') {
        this.accountStatus = 'block'; 
      }else {
        this.accountStatus = 'active';
      }

      if (!data) {
        const url = `/admin/customerManagement`;
        this.router.navigateByUrl(url);
      }
    },
      (error) => {
        console.error('Error occurred:', error);
      })

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getUserDetails();
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(AlertModalComponent,{
      data:{
        message: '<!DOCTYPE html><html><body><h1>Delete</h1><p>Do You Want to Delete this Account?</p></body></html>',
        buttonText: {
          cancel: 'Cancel',
          action: 'Confirm'
        }
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteUserById();
        return
      }
    });
  }
  showProfile() {
    this.activeTab = 'profile';
   
  }
  showReports() {
    this.activeTab = 'reports';
    
  }
  showOrders() {
    this.activeTab = 'orders'
    if(this.userRole == 'buyer'){
      this.orderManagementService.getOrderDataByBuyerId(this.userId).subscribe((data)=>{
        this.userOrders = data;
        this.userOrdersLoaded = true;
       
      })
      
    }else{
      this.orderManagementService.getOrderDataBySellerId(this.userId).subscribe((data)=>{
        this.userOrders = data;
        this.userOrdersLoaded = true;
      })
    }
   
    
  }
  showVehicles() {
    this.activeTab = 'vehicles';
    
    this.productManagementService.getProductsDataBySellerId(this.userId).subscribe((data)=>{
      this.userVehicles = data;
      console.log(this.userVehicles);
    })
    // admin/getProductsBySellerId/
    
  }


  //functionalities
  blockUserById() {
    this.customerManService.updateUserDetailsById(this.userId, { "status": "block" }).subscribe(
      result => {
        if(!result){
          
          return
        }
        console.log('User details updated successfully:', result);
        this.openSnackBar("User Blocked Successfully","close");
        // location.reload();
        this.getUserDetails();
      },
      error => {
        console.error('Error updating user details:', error);
      }
    );

  }

  unBlockUserById() {
    this.customerManService.updateUserDetailsById(this.userId, { "status": "active" }).subscribe(
      result => {
        if(!result){
          return
        }
        console.log('User details updated successfully:', result);
        this.openSnackBar("User Status Updated to Active Successfully","close");
        // location.reload();
        this.getUserDetails();
      },
      error => {
        console.error('Error updating user details:', error);
      }
    );

  }

  deleteUserById() {
    console.log("delete")
    this.customerManService.deleteUserById(this.userId).subscribe(
      result => {
        if(!result){
          return
        }
        console.log("User Details Deleted Successfully", result);
        this.openSnackBar("User Deleted Successfully","close");
        const url = `/admin/customerManagement`;
        this.router.navigateByUrl(url);
      },
      error => {
        console.log("Error Deleting User Details", error);
      })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
}