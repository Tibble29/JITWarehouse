import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent {

  constructor(private route: Router) { }

  displayedColumns: string[] = ['name', 'id', 'view'];

  dataSource = new MatTableDataSource<{ name: string, id: string }>([
    { name: "John Penney", id: '1'},
    { name: "Mark Gilbert", id: '2'},
    { name: "Mark Hamnett", id: '3'},
    { name: "Martin Fieldhouse", id: '4'},
    { name: "Mervyn Buchanan", id: '5'},
    { name: "Michael Cropley", id: '6'},
    { name: "Myles Taylor", id: '7'},
    { name: "Nicholas Cassedy", id: '8'},
    { name: "Nicholas Northern", id: '9'},
    { name: "Nigel Partlett", id: '10'},
    { name: "Oliver Blake", id: '11'},
    { name: "Paul Tibble", id: '12'},
    { name: "Peter Wilce", id: '13'},
    
  ]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 10;
  }

  Click(id: any) {

  }

  applyFilter(filterValue: any) {
    let filter = filterValue.target.value

    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
