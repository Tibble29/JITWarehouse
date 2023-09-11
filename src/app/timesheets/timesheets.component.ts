import { Component, TemplateRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent {

  constructor(private bottomSheet: MatBottomSheet) { }

  bottomSheetTemplate!: TemplateRef<any>;

displayedColumns: string[] = ['status', 'employee', 'drive', 'face', 'warehouse', 'garage', 'otherStaff', 'absent', 'memos', 'adminMemos'];

  dataSource = new MatTableDataSource<{status: string, employee: string, drive: string, face: string, warehouse: string, garage: string,
  otherStaff: string,
  absent: string,
  memos: string,
  adminMemos: string }>([
    {
      status: 'Ready',
      employee: 'JD - John - 041',
      drive: '',
      face: '',
      warehouse: '',
      garage: '',
      otherStaff: '08:00 - 16:00 ( 8h )',
      absent: '',
      memos: '',
      adminMemos: ''
    },
    {
      status: 'Populated',
      employee: 'PLT - Paul - 190',
      drive: '',
      face: '',
      warehouse: '',
      garage: '',
      otherStaff: '08:00 - 16:00 ( 8h )',
      absent: '',
      memos: '',
      adminMemos: ''
    },
  ]);


  getTableCellClass(status: string): string {
    if (status === 'Ready') {
      return 'green-cell';
    } else {
      return 'red-cell';
    }
  }



  openBottomSheet(templateRef: TemplateRef<any>): void {
    this.bottomSheet.open(templateRef);
  }
  
  
  closeBottomSheet(): void {
    this.bottomSheet.dismiss();
  }
}
