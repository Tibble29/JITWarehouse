import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MemosComponent } from './memos/memos.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SingleVehicleComponent } from './single-vehicle/single-vehicle.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeliveryDocketsComponent } from './delivery-dockets/delivery-dockets.component';
import { PickConsignmentsComponent } from './pick-consignments/pick-consignments.component';
import { LoadJitpodComponent } from './load-jitpod/load-jitpod.component';
import { MaintainVehiclesComponent } from './maintain-vehicles/maintain-vehicles.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { ScanGoodsOutComponent } from './scan-goods-out/scan-goods-out.component';
import { NightShiftComponent } from './scan-goods-out/night-shift/night-shift.component';
import { DriverComponent } from './scan-goods-out/driver/driver.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'consignments', component: PickConsignmentsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'delivery-dockets', component: DeliveryDocketsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'load-jitpod', component: LoadJitpodComponent},
  { path: 'login', component: LoginComponent },
  { path: 'maintain-vehicles', component: MaintainVehiclesComponent },
  { path: 'memos', component: MemosComponent },
  { path: 'scan-goods-out', component: ScanGoodsOutComponent },
  { path: 'scan-goods-out/night-shift', component: NightShiftComponent },
  { path: 'scan-goods-out/night-shift/driver/:id', component: DriverComponent },
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicles/:id', component: SingleVehicleComponent },
  { path: 'timesheets', component: TimesheetsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
