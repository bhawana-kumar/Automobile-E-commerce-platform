import { NgModule } from "@angular/core";
import { dashboardComponent } from "./Dashboard/dashboard.component";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { sidebarComponent } from "./SideBar/sidebar.component";
import { customerMangementComponent } from "./customerMangement/cm.component";
import { vehicleManagementComponent } from "./vehicleManagement/vehicleManagement.component";
import { contentMangementComponent } from "./contentManagement/contentMan.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { userDetailsComponent } from "./userDetails/userDetails.component";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { adminLoginComponent } from "./adminLogin/adminLogin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DashComponent } from "./dash/dash.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from "./card/card.component";
import { orderManagementComponent } from "./ordersManagement/ordersManagement.compnent";
import { orderDetailsComponent } from "./orderDetails/orderDetails.component";
import { salesChartComponent } from "./charts/line-chart/line-chart.component";
import { pieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { barChartComponent } from "./charts/bar-chart/bar-chart.component";
import { reportsComponent } from "./reports/reports.component";
import { orderReceiptComponent } from "./orderReceipt/orderReceipt.component";
import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from "@angular/platform-browser";
import { AlertModalComponent } from "./alertModal/alertModal.component";

@NgModule({
    declarations: [dashboardComponent,
        sidebarComponent,
        customerMangementComponent,
        vehicleManagementComponent,
        contentMangementComponent,
        reportsComponent,
        userDetailsComponent,
        adminLoginComponent,
        DashComponent,
    CardComponent,
orderManagementComponent,
orderDetailsComponent,
salesChartComponent,
pieChartComponent,
barChartComponent,
orderReceiptComponent,
AlertModalComponent
],
    imports: [RouterLink,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([]),
        NgChartsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTooltip,
        MatDialogModule
    ],
    exports: [dashboardComponent,
        sidebarComponent,
        customerMangementComponent,
        vehicleManagementComponent,
        contentMangementComponent,
        reportsComponent,
        userDetailsComponent,
        adminLoginComponent,
        DashComponent,
        CardComponent,
        orderManagementComponent,
        orderDetailsComponent,
        salesChartComponent,
        pieChartComponent,
        barChartComponent,
        orderReceiptComponent,AlertModalComponent
    ]

}) export class adminModule {

}