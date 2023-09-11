import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent {

  constructor(private route: Router) { }

  displayedColumns: string[] = ['registration', 'view'];

  dataSource = new MatTableDataSource<{ registration: string, view: string }>([
    { registration: 'AB12CDE', view: 'Edit'},
    { registration: 'FG34HIJ', view: 'Edit'},
    { registration: 'KL56MNO', view: 'Edit'},
    { registration: 'PQ78RST', view: 'Edit'},
    { registration: 'UV90WXY', view: 'Edit'},
    { registration: 'ZA11BCD', view: 'Edit'},
    { registration: 'EF23GHI', view: 'Edit'},
    { registration: 'JK45LMN', view: 'Edit'},
    { registration: 'OP67QRS', view: 'Edit'},
    { registration: 'TU89VWX', view: 'Edit'},
    { registration: 'YZ01234', view: 'Edit'},
    { registration: '56789ABC', view: 'Edit' },
    { registration: 'DEFGHIJK', view: 'Edit' },
    { registration: 'LMNOPQR', view: 'Edit'},
    { registration: 'STUVWXY', view: 'Edit'},
    { registration: 'ZAB12CDE', view: 'Edit' },
    { registration: 'FG34HIJ', view: 'Edit'},
    { registration: 'KL56MNO', view: 'Edit'},
    { registration: 'PQ78RST', view: 'Edit'},
    { registration: 'UV90WXY', view: 'Edit'}
  ]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 10;
  }

  vehicleClick(id: any) {
    this.route.navigateByUrl('/vehicles/' + id)
  }

  applyFilter(filterValue: any) {
    let filter = filterValue.target.value

    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
