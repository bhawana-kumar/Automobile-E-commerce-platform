
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarDescModule } from './components/cars-section/car-desc/car-desc.module';
import { RecommendedComponent } from './components/cars-section/recommended/recommended.component';
import {ReportComponent} from './components/cars-section/report/report.component';
import { PaymentComponent } from './components/cars-section/payment/payment.component';

@NgModule({
    declarations: [
    HomeComponent,
      HeaderComponent,
      FooterComponent,
      SearchComponent,
      CardsComponent,
      CarouselComponent,
      CarsSectionComponent,
      CarfilterComponent,
      CarListComponent,
      RecommendedComponent,
      FooterComponent,
     ReportComponent,
     PaymentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterLink
      ],exports: [
        HomeComponent,
      HeaderComponent,
      FooterComponent,
      SearchComponent,
      CardsComponent,
      CarouselComponent,
      CarsSectionComponent,
      CarfilterComponent,
      CarListComponent,
      RecommendedComponent,
      FooterComponent,
      ReportComponent,
      PaymentComponent
      ]
    })
    export class HomeModule { }