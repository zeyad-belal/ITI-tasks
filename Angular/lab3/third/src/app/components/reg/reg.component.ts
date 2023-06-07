import { Component , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  name= "";
  age="";
  nameIsValid:any;
  ageIsValid:any;

  @Output() myEvent = new EventEmitter()

  sendData(){
    this.nameIsValid= this.name.length >= 3
    this.ageIsValid =  +this.age > 20 && +this.age < 40

    if(this.nameIsValid && this.ageIsValid){
      this.myEvent.emit({name:this.name, age:this.age})
      this.name=""
      this.age=""
    }

  }

}
