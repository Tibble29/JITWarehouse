import { Component } from '@angular/core';

interface Vehicle {
  reg: string;
  highmiles: string;
  lastRoute: string;
  mileStatus2: string;
  inspectDTStatus: string;
  svcDtStatus2: string;
  driveStatus: string;
}

@Component({
  selector: 'app-maintain-vehicles',
  templateUrl: './maintain-vehicles.component.html',
  styleUrls: ['./maintain-vehicles.component.scss']
})
export class MaintainVehiclesComponent {


  vehicles: Vehicle[] = [
    {
      reg: 'BN09 YOJ',
      highmiles: '28-03-2023',
      lastRoute: 'EX2',
      mileStatus2: '394',
      inspectDTStatus: 'I:27',
      svcDtStatus2: 's:-13',
      driveStatus: 'drivable'
    },
  {
    reg: 'FN70 BXJ',
    highmiles: '28-03-2023',    
    lastRoute: 'EX2',
    mileStatus2: '394',
    inspectDTStatus: 'I:27',
    svcDtStatus2: 's:-13',
    driveStatus: 'undriveable'
},
{
  reg: 'FN70 BXJ',
  highmiles: '28-03-2023',
  lastRoute: 'EX2',
  mileStatus2: '394',
  inspectDTStatus: 'I:27',
  svcDtStatus2: 's:-13',
  driveStatus: 'drivable'
},
    {
  reg: 'AR56 BXJ',
  highmiles: '28-03-2023',
  lastRoute: 'LA1',
  mileStatus2: '394',
  inspectDTStatus: 'I:27',
  svcDtStatus2: 's:-13',
  driveStatus: 'drivable'
},
{
  reg: 'FN70 BXJ',
  highmiles: '28-03-2023',
  lastRoute: 'LA2',
  mileStatus2: '394',
  inspectDTStatus: 'I:27',
  svcDtStatus2: 's:-13',
  driveStatus: 'unknown'
}]

filteredCards = [...this.vehicles];
searchTerm = '';


getCardClass(driveStatus: string) {
  if (driveStatus === 'drivable') {
    return 'driveable';
  } else if (driveStatus === 'undriveable') {
    return 'undriveable';
  } else {
    return 'unknown';
  }
}

filterVehicles() {
  this.filteredCards = this.vehicles.filter(card =>
    card.reg.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    card.lastRoute.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
     card.driveStatus.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())
  );
}

}
