import { Component } from '@angular/core';
import {StudentsService} from 'src/app/services/students.service'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any;

  constructor(public myService:StudentsService){

  }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (data)=>this.students = data,
      (err)=>console.log(err)
    )
  }
  deleteUser(id:any){
    this.myService.deleteUser(id).subscribe()
    this.myService.getAllUsers().subscribe(
      (data)=>this.students = data,
      (err)=>console.log(err)
    )
  }
}
