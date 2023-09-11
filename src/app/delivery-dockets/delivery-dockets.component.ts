import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delivery-dockets',
  templateUrl: './delivery-dockets.component.html',
  styleUrls: ['./delivery-dockets.component.scss']
})
export class DeliveryDocketsComponent {
  showTable = false;
  displayedColumns: string[] = ['routeEmployee', 'printed', 'emergencySheet', 'emails', 'handheld'];

  dataSource = new MatTableDataSource<{ routeEmployee: string, printed: string, emergencySheet: string, emails: string, handheld: string }>([
    { routeEmployee: 'LA8 / Stuart Rayson', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    { routeEmployee: 'CA1 / George Armstrong', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    { routeEmployee: 'CA2 / Craig Sanderson', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    { routeEmployee: 'CA3 / Colin Witherington', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    { routeEmployee: 'PE1 / John Griffin', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    { routeEmployee: 'PE2 / Ronnie Reekie', printed: 'no', emergencySheet: 'btn', emails: 'btn', handheld: 'btn'},
    
  ]);

  TableToggle() {
    if(this.showTable === true) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }
}
