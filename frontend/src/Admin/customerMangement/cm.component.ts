import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { customerManagementService } from "../adminServices/customerManagement.service";
import { Router } from "@angular/router";


@Component({
    selector: 'cm-component',
    templateUrl:'./cm.component.html',
    styleUrl: './cm.component.css'
}) export class customerMangementComponent implements OnInit{
    
    searchKeyword:String = '';
    usersData:any= []; //data to be stored 
    filtredData:any = []; 
    @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;

    //pagination
    totalRows:number = 0;
    pagesRow:number = 10;
    currentPage:number = 1;
    pages:number = 0;
   

    constructor(private http:HttpClient,private router:Router, private customerManService:customerManagementService){
  
    }

    getUsersData(){
      //get all data from api
      this.customerManService.getUserData().subscribe((res)=>{
        console.log(res);
        this.usersData = res;
        this.totalRows = this.usersData.length;
        this.filtredData = this.usersData;
        console.log(this.totalRows);
        this.onDropdownChange();
        this.onPageChange(this.currentPage) //sending to change rows
      })
    }
  
    ngOnInit(){
      this.getUsersData();
    }

    UserDetails(id:string){
      const url = `/admin/customerManagement/${id}`;
      this.router.navigateByUrl(url);
    }

    searchFilter_all_table(){
      if (this.searchKeyword.trim() === '') {
        this.filtredData = this.usersData;
        this.onPageChange(this.currentPage);
      } else {
        this.filtredData = this.usersData.filter((user:any) => {
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
      this.filtredData = this.usersData.slice(startIndex,endIndex)
      
    }

    getRange(): number[] {
      return Array.from({ length: this.pages }, (_, index) => index);
    }
    onDropdownChange(){
      this.pagesRow = parseInt(this.maxRowsDropdown?.nativeElement.value, 10);
      this.pages = Math.ceil(this.totalRows / this.pagesRow);
      this.onPageChange(this.currentPage); //sending to change rows
    }
  
    // addNotes(){
    //   var formData =  new FormData();
    //   formData.append("newNotes",this.newNotes);
    //   this.http.post(this.APIURL+'AddNotes',formData).subscribe(data=>{
    //     console.log(data);
        
    //     this.refreshNotes();
    //   })
    //   this.newNotes = "";
    // }
  
    // deleteNotes(id:any){
    //   this.http.delete(this.APIURL+'DeleteNotes?id='+ id).subscribe(data=>{
    //     console.log("delete sucessfully");
    //     this.refreshNotes();
    //   })
    // }
  
    // updateNotes(){
    //   var formData =  new FormData();
    //   formData.append("editedNote",this.edited)
    //   this.http.put(this.APIURL+'UpdateNotes?id='+ this.taskId,formData).subscribe(data=>{
    //     console.log("Update sucessfully");
    //     this.refreshNotes();
    //   })
    //   this.edit = false;
  
    // }
  
    // editNotes(id:any){
    //   this.edit = true;
    //   this.taskId = id;
    //   this.http.get<any>(this.APIURL+"GetNoteById?id="+id).subscribe(data=>{
    //     this.edited = data.description;
    //   // console.log("fetch request success");
    //   console.log(data);
  
    //  })
   
     
    }
