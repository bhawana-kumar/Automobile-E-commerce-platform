import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { orderManagementService } from "../adminServices/orderManagement.service";

@Component({
    selector: 'orderManagement-component',
    templateUrl: './ordersManagement.component.html',
    styleUrl: './ordersManagement.component.css'
}) export class orderManagementComponent {

  searchKeyword:String = '';
  ordersData:any= []; //data to be stored 
  filtredData:any = []; 
  @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;

  //pagination
  totalRows:number = 0;
  pagesRow:number = 10;
  currentPage:number = 1;
  pages:number = 0;
 

  constructor(private http:HttpClient,private router:Router, private orderManagementService:orderManagementService){

  }

  getordersData(){
    //get all data from api
    this.orderManagementService.getOrdersData().subscribe((res:any)=>{
      console.log(res);
      this.ordersData = res;
      this.totalRows = this.ordersData.length;
      this.filtredData = this.ordersData;
      console.log(this.totalRows);
      this.onDropdownChange();
      this.onPageChange(this.currentPage) //sending to change rows
    })
  }

  ngOnInit(){
    this.getordersData();
  }

  OrderDetails(id:string){
    const url = `/admin/orderManagement/${id}`;
    this.router.navigateByUrl(url);
  }

  searchFilter_all_table(){
    if (this.searchKeyword.trim() === '') {
      this.filtredData = this.ordersData;
      this.onPageChange(this.currentPage);
    } else {
      this.filtredData = this.ordersData.filter((order:any) => {
        const fieldsToSearch = ['_id', 'orderStatus']
        return fieldsToSearch.some(fieldName => {
          const value = order[fieldName];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
          } else if (typeof value === 'number') {
            return value.toString().includes(this.searchKeyword.toString());
          }
          return false;
        });
  
      });

    }
   
  }

  //pagination
  onPageChange(pageNo:number){
    this.currentPage = pageNo;
    const startIndex:number = (this.currentPage - 1) * this.pagesRow;
    // let endIndex = Math.min(startIndex + this.pagesRow, this.totalRows);
    
    const endIndex:number = startIndex + this.pagesRow;
    console.log(endIndex);
    this.filtredData = this.ordersData.slice(startIndex,endIndex)
    
  }

  getRange(): number[] {
    return Array.from({ length: this.pages }, (_, index) => index);
  }
  onDropdownChange(){
    this.pagesRow = parseInt(this.maxRowsDropdown?.nativeElement.value, 10);
    this.pages = Math.ceil(this.totalRows / this.pagesRow);
    this.onPageChange(this.currentPage); //sending to change rows
  }
}