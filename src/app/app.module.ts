import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemosComponent } from './memos/memos.component';
import { FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleVehicleComponent } from './single-vehicle/single-vehicle.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeliveryDocketsComponent } from './delivery-dockets/delivery-dockets.component';
import { HeaderComponent } from './header/header.component';
import { PickConsignmentsComponent } from './pick-consignments/pick-consignments.component';
import { LoadJitpodComponent } from './load-jitpod/load-jitpod.component';
import { MaintainVehiclesComponent } from './maintain-vehicles/maintain-vehicles.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ScanGoodsOutComponent } from './scan-goods-out/scan-goods-out.component';
import { NightShiftComponent } from './scan-goods-out/night-shift/night-shift.component';
import { DriverComponent } from './scan-goods-out/driver/driver.component';
import { ItemsComponent } from './scan-goods-out/items/items.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MemosComponent,
    VehicleComponent,
    SingleVehicleComponent,
    SidebarComponent,
    EmployeesComponent,
    DeliveryDocketsComponent,
    HeaderComponent,
    PickConsignmentsComponent,
    LoadJitpodComponent,
    MaintainVehiclesComponent,
    TimesheetsComponent,
    ScanGoodsOutComponent,
    NightShiftComponent,
    DriverComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatBottomSheetModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
