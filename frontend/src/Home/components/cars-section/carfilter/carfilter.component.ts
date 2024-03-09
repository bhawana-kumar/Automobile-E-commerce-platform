
import { Component, OnInit } from '@angular/core';
import { CarfilterService } from '../../../service/carfilter.service';
import { CarSelectionService } from '../../../service/car-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carfilter',
  templateUrl: './carfilter.component.html',
  styleUrls: ['./carfilter.component.css']
})
export class CarfilterComponent implements OnInit {
  cars: any[] = [];
  brandNames: string[] = [];
  bodyTypes: string[] = [];
  colors: string[] = [];
  fuelTypes: string[] = [];
  selectedbrandNames: string[] = [];
  selectedbodyTypes: string[] = [];
  selectedfuelTypes: string[] = [];
  selectedcolors: string[] = [];
  selectedPriceRanges: string[] = [];
  filterOpen: boolean = false;
  brandFilterOpen: boolean = false;
  fuelFilterOpen: boolean = false;
  priceFilterOpen: boolean = false;
  pageSize: number = 9; 
  currentPage: number = 1; 
  paginatedCars: any[];

  constructor(private router: Router,
    private carService: CarfilterService, private carSelectionService: CarSelectionService) {
      this.paginatedCars = []; 
      this.fetchCarsAndFilter();
}

  ngOnInit() {
    this.fetchCarDetails();
    this.fetchCarsAndFilter();
  }

  selectCar(carId: number) {
    this.carSelectionService.setSelectedCarId(carId);
    this.router.navigate(['/car', carId]);
  }

  fetchCarDetails() {
    this.carService.findCarDetails().subscribe(
      (data: any[]) => {
        this.cars = data;
        this.extractbrandNames();
        this.extractbodyTypes();
        this.extractcolors();
        this.extractfuelTypes();
        this.updatePagination();
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  extractbrandNames() {
    this.brandNames = Array.from(new Set(this.cars.map(car => car.brandName)));
  }
  
  extractbodyTypes() {
    this.bodyTypes = Array.from(new Set(this.cars.map(car => car.bodyType)));
  }
  extractcolors() {
    this.colors = Array.from(new Set(this.cars.map(car => car.color)));
  }
  
  extractfuelTypes() {
    this.fuelTypes = Array.from(new Set(this.cars.map(car => car.fuelType)));
  }
  
  togglebrandName(brandName: string) {
    if (this.selectedbrandNames.includes(brandName)) {
      this.selectedbrandNames = this.selectedbrandNames.filter(item => item !== brandName);
    } else {
      this.selectedbrandNames.push(brandName);
    }
    this.updatePagination();
  }
  
  togglebodyType(bodyType: string) {
    if (this.selectedbodyTypes.includes(bodyType)) {
      this.selectedbodyTypes = this.selectedbodyTypes.filter(item => item !== bodyType);
    } else {
      this.selectedbodyTypes.push(bodyType);
    }
    this.updatePagination();
  }
  togglecolor(color: string) {
    if (this.selectedcolors.includes(color)) {
      this.selectedcolors = this.selectedcolors.filter(item => item !== color);
    } else {
      this.selectedcolors.push(color);
    }
    this.updatePagination();
  }
  
  togglefuelType(fuelType: string) {
    if (this.selectedfuelTypes.includes(fuelType)) {
      this.selectedfuelTypes = this.selectedfuelTypes.filter(item => item !== fuelType);
    } else {
      this.selectedfuelTypes.push(fuelType);
    }
    this.updatePagination();
  }
  
  togglePriceRange(range: string) {
    if (this.selectedPriceRanges.includes(range)) {
      this.selectedPriceRanges = this.selectedPriceRanges.filter(item => item !== range);
    } else {
      this.selectedPriceRanges.push(range);
    }
    this.updatePagination();
  }

  removebrandName(brandName: string) {
    this.selectedbrandNames = this.selectedbrandNames.filter(name => name !== brandName);
    this.updatePagination();
  }
  
  removebodyType(bodyType: string) {
    this.selectedbodyTypes = this.selectedbodyTypes.filter(name => name !== bodyType);
    this.updatePagination();
  }
  
  removefuelType(fuelType: string) {
    this.selectedfuelTypes = this.selectedfuelTypes.filter(name => name !== fuelType);
    this.updatePagination();
  }
  
  removePriceRange(PriceRange: string) {
    this.selectedPriceRanges = this.selectedPriceRanges.filter(name => name !== PriceRange);
    this.updatePagination();
  }

  goToCardDetail(id: number) {
    this.router.navigate(['/car-desc', id]);
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }
  
  toggleBrandFilter() {
    this.brandFilterOpen = !this.brandFilterOpen;
  }
  
  toggleFuleFilter() {
    this.fuelFilterOpen = !this.fuelFilterOpen;
  }
  
  togglePriceFilter() {
    this.priceFilterOpen = !this.priceFilterOpen;
  }

  updatePagination() {
    this.currentPage = 1; 
    this.paginate();
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const filteredCars = this.filteredCars();
    this.paginatedCars = filteredCars.slice(startIndex, startIndex + this.pageSize);
  }

  filteredCars(): any[] {
    return this.cars.filter(car => {
      const brandNameFilter = this.selectedbrandNames.length === 0 || this.selectedbrandNames.includes(car.brandName);
      const bodyTypeFilter = this.selectedbodyTypes.length === 0 || this.selectedbodyTypes.includes(car.bodyType);
      const fuelTypeFilter = this.selectedfuelTypes.length === 0 || this.selectedfuelTypes.includes(car.fuelType);
      const colorFilter = this.selectedcolors.length === 0 || this.selectedcolors.includes(car.color);
      const statusFilter = car.status === 'available';

      let priceFilter = true;

      if (this.selectedPriceRanges.length > 0) {
        priceFilter = this.selectedPriceRanges.some(range => {
          if (range === '30L and above') {
            return parseFloat(car.price) >= 30;
          } else if (range === '2-5L') {
            const [min, max] = [2, 5];
            return parseFloat(parseFloat(car.price).toFixed(2)) >= min && parseFloat(parseFloat(car.price).toFixed(2)) <= max;
          } else if (range === '5-10L') {
            const [min, max] = [5, 10];
            return parseFloat(parseFloat(car.price).toFixed(2)) >= min && parseFloat(parseFloat(car.price).toFixed(2)) <= max;
          } else if (range === '10-15L') {
            const [min, max] = [10, 15];
            return parseFloat(parseFloat(car.price).toFixed(2)) >= min && parseFloat(parseFloat(car.price).toFixed(2)) <= max;
          } else if (range === '15-30L') {
            const [min, max] = [15, 30];
            return parseFloat(parseFloat(car.price).toFixed(2)) >= min && parseFloat(parseFloat(car.price).toFixed(2)) <= max;
          } else {
            const [min, max] = range.split('-').map(parseFloat);
            return car.price >= min && car.price <= max;
          }
        });
      }
     
      return brandNameFilter && bodyTypeFilter && fuelTypeFilter && priceFilter && colorFilter && statusFilter;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.paginate();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  totalPages(): number {
    return Math.ceil(this.filteredCars().length / this.pageSize);
  }
   filterAvailableCars(cars: any[]): any[] {
    return cars.filter(car => car.status === 'available');
  }

  fetchCarsAndFilter(): void {
    this.carService.findCarDetails().subscribe(
      (cars: any[]) => {
        this.cars = cars; 
        this.paginatedCars = this.filterAvailableCars(cars); 
        console.log('Filtered cars:', this.paginatedCars); 
        this.updatePagination(); 
      },
      (error) => {
        console.error('Error fetching cars:', error); 
      }
    );
  }

}