import { Component } from '@angular/core';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.scss']
})
export class MemosComponent {

  selectedMemoType: string = '';
  selectedName: string = '';
  message: string = '';

  submitMessage() {
    // Perform action on message submission
    console.log('Memo Type:', this.selectedMemoType);
    console.log('Name:', this.selectedName);
    console.log('Message:', this.message);
  }
}
