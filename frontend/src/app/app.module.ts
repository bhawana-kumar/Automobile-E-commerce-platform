import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { SearchComponent } from './components/home/search/search.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { CarsSectionComponent } from './components/cars-section/cars-section.component';
import { CarfilterComponent } from './components/cars-section/carfilter/carfilter.component';
import { CarListComponent } from './components/cars-section/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CardsComponent,
    CarouselComponent,
    HomeComponent,
    CarsSectionComponent,
    CarfilterComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
