
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { productManagementService } from "../adminServices/productMangement.service";

@Component({
    selector: 'vehicleManagement-component',
    templateUrl:'./vehicleManagement.component.html',
    styleUrl: './vehicleManagement.component.css'
}) export class vehicleManagementComponent {

    searchKeyword:String = '';
    productsData:any= []; //data to be stored 
    filtredData:any = []; 
    @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;

    //pagination
    totalRows:number = 0;
    pagesRow:number = 10;
    currentPage:number = 1;
    pages:number = 0;
   

    constructor(private http:HttpClient,private router:Router, private productManagementService:productManagementService){
  
    }

    getproductsData(){
      //get all data from api
      this.productManagementService.getProductsData().subscribe((res:any)=>{
        console.log(res);
        this.productsData = res;
        this.totalRows = this.productsData.length;
        this.filtredData = this.productsData;
        console.log(this.totalRows);
        this.onDropdownChange();
        this.onPageChange(this.currentPage) //sending to change rows
      })
    }
  
    ngOnInit(){
      this.getproductsData();
    }

    productDetails(id:string){
      const url = `/admin/productManagement/${id}`;
      this.router.navigateByUrl(url);
    }

    searchFilter_all_table(){
      if (this.searchKeyword.trim() === '') {
        this.filtredData = this.productsData;
        this.onPageChange(this.currentPage);
      } else {
        this.filtredData = this.productsData.filter((user:any) => {
          return Object.values(user).some(value => {
            if (typeof value === 'string') {
              return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
            }
            else if( typeof value === 'number'){
              return value.toString().includes(this.searchKeyword.toString())
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
      this.filtredData = this.productsData.slice(startIndex,endIndex)
      
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