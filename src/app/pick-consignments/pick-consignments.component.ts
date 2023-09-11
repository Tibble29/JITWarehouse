import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pick-consignments',
  templateUrl: './pick-consignments.component.html',
  styleUrls: ['./pick-consignments.component.scss']
})
export class PickConsignmentsComponent {

arCode: string = ''
packList: string = ''
caseNumber: string = ''
jdReference: string = ''
dealerReference: string = ''
packlistInToteReference: string = ''
fromDate: string = ''
toDate: string = ''
isSectionHidden = false;
contentHeight: string = '0';
show = false;



displayedColumns: string[] = ['Barcode', 'Consolidate', 'CaseNum', 'PackList', 'JDRef', 'Type', 'Wgt', 'Size', 'Pck', 'Status', 'Actual', 'Dealer', 'Town', 'Transmission', 'InStock', 'Dispatched', 'Consolidation'];

dataSource = new MatTableDataSource<{ Barcode?: string;
  Consolidate?: string;
  CaseNum?: string;
  PackList?: string;
  JDRef?: string;
  Type?: string;
  Wgt?: string;
  Size?: string;
  Pck?: string;
  Status?: string;
  Actual?: string;
  Dealer?: string;
  Town?: string;
  Transmission?: string;
  InStock?: string;
  Dispatched?: string;
  Consolidation?: string; }>([ 
    {
      Barcode: 'TOTE3745',
      Consolidate: '',
      CaseNum: '0',
      PackList: 'NT',
      JDRef: '7',
      Type: 'TOTE',
      Wgt: 'Jit - Delivered',
      Size: 'JIT - Delivered',
      Pck: '311353',
      Status: 'MILNTHORPE',
      Actual: '30 May 2023',
      Dealer: '30 May 2023',
      Town: '30 May 2023',
      Transmission: '',
      InStock: '',
      Dispatched: '',
      Consolidation: ''
    },
    {
      Barcode: 'TOTE3745',
      Consolidate: '',
      CaseNum: '0',
      PackList: 'NT',
      JDRef: '7',
      Type: 'TOTE',
      Wgt: 'Jit - Delivered',
      Size: 'JIT - Delivered',
      Pck: '311049',
      Status: 'LLANGEFNI',
      Actual: '25 May 2023',
      Dealer: '25 May 2023',
      Town: '25 May 2023',
      Transmission: '',
      InStock: '',
      Dispatched: '',
      Consolidation: ''
    },
    {
      Barcode: 'TOTE3745',
      Consolidate: '',
      CaseNum: '0',
      PackList: 'NT',
      JDRef: '8',
      Type: 'TOTE',
      Wgt: 'Jit - Delivered',
      Size: 'JIT - Delivered',
      Pck: '311050',
      Status: 'RUTHIN',
      Actual: '22 May 2023',
      Dealer: '22 May 2023',
      Town: '22 May 2023',
      Transmission: '',
      InStock: '',
      Dispatched: '',
      Consolidation: ''
    },
    {
      Barcode: 'TOTE3745',
      Consolidate: '',
      CaseNum: '0',
      PackList: 'NT',
      JDRef: '6',
      Type: 'TOTE',
      Wgt: 'Jit - Delivered',
      Size: 'JIT - Delivered',
      Pck: '311324',
      Status: 'WAKEFIELD',
      Actual: '16 May 2023',
      Dealer: '16 May 2023',
      Town: '16 May 2023',
      Transmission: '',
      InStock: '',
      Dispatched: '',
      Consolidation: ''
    }    
  ])


  showTable() {
    this.show = true;
  }
}