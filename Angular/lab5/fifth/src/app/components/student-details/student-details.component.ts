import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  ID:any;
  constructor(myRoute:ActivatedRoute){
    this.ID = myRoute.snapshot.params["id"];
  }
}
