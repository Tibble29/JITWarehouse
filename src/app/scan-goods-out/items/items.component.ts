import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  itemsDisplayedColumns: string[] = ['route', 'routeVal', 'jdDisp', 'jitIn', 'jitDisp', 'fly', 'forestry', 'vapormatic', 'trunk', 'subTrunk', 'thisRoute', 'thisDocket', 'frozen'];
  @Input() driver: any;


  constructor(private itemService: ItemService) {
  }

  itemsDataSource = new MatTableDataSource <{
    route: string,
    routeVal: string,
    jdDisp: string,
    jitIn: string,
    jitDisp: string,
    fly: string,
    forestry: string,
    vapormatic: string,
    trunk: string,
    subTrunk: string,
    thisRoute: string,
    thisDocket: string,
    frozen: string,
  }>([{
    route: 'LA1',
    routeVal: '361',
    jdDisp: '0',
    jitIn: '0',
    jitDisp: '0',
    fly: '0',
    forestry: '0',
    vapormatic: '0',
    trunk: '0',
    subTrunk: '4510',
    thisRoute: '0',
    thisDocket: '0',
    frozen: '0',
  }])


  addItem(item: any) {
    console.log('any', item, this.driver)
    this.itemService.driverItems.push(this.driver.driver, item)
  }
}
