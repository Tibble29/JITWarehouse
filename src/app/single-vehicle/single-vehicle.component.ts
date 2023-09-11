import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent {

  constructor(private route: ActivatedRoute) { }

id: string = '';
fuel1: string = '';
fuel2: string = '';

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      // Use the 'id' value as needed
    });
  }

  comments: Comment[] = [
    { text: 'Broken down, cracked exhaust', date: new Date('2022-03-15'), name: 'Pete'},
    { text: 'Broken down, 2 flat tyres from nails', date: new Date('2022-06-25'), name: 'Oli' }
  ];
  newComment: string = '';

  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push({ text: this.newComment, date: new Date(), name: 'Paul' });
      this.newComment = '';
    }
  }
}

interface Comment {
  text: string;
  date: Date;
  name: string;
}
