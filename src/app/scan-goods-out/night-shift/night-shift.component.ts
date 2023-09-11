import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-night-shift',
  templateUrl: './night-shift.component.html',
  styleUrls: ['./night-shift.component.scss']
})

export class NightShiftComponent {
table = true;
singleDriver = false;
driver: any;

 displayedColumns: string[] = ['route', 'vehicle', 'item', 'itemalt', 'driver', 'view'];
 dataSource = new MatTableDataSource<{route: string, vehicle: string, item: string, itemalt: string, driver: string, view:any }>([
  {
    route: 'LA1',
    vehicle: 'Car',
    item: 'Item 1',
    itemalt: 'Alt Item 1',
    driver: 'John Doe',
    view: null // The 'view' column data, you can set it as needed
  },
]);



viewUser(user: any) {
  this.table = false;
  this.singleDriver = true;
  this.driver = user
}
  
}
