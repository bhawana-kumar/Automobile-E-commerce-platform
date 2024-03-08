import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  isEmpty: boolean = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSearchSubmit(searchValue: string ,event: Event): void {
    event.preventDefault();
    this.searchService.searchProducts(searchValue).subscribe({
      next: (results) => {
        console.log("API Response:", results);
        this.searchResults = results;

        if(results.length == 0){
          this.isEmpty = true;

        }else{
          this.isEmpty = false;
        }
        
      },
      error: (error) => {
        console.error('Error fetching search results:', error);
      }
    });
    
    
  }

}

