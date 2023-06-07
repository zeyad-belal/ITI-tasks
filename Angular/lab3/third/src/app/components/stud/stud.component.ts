import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent {
  @Input() dataFromParent:{name:string, age:string}[] = []

}
