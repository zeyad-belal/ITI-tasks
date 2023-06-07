import { Component , Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html'
})
export class RegComponent {

  myValidation = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)]),
    email: new FormControl("",[Validators.required,Validators.email])
  })

  nameIsValid:any;
  ageIsValid:any;
  emailIsValid:any;

  @Output() myEvent = new EventEmitter();


  addData(){
    if(this.myValidation.controls["name"].valid){
      this.nameIsValid = true
    }else{
      this.nameIsValid = false
    }
    if(this.myValidation.controls["age"].valid){
      this.ageIsValid = true
    }else{
      this.ageIsValid = false
    }
    if(this.myValidation.controls["email"].valid){
      this.emailIsValid = true
    }else{
      this.emailIsValid = false
    }
    if(this.nameIsValid &&this.ageIsValid &&this.emailIsValid){
      this.myEvent.emit(this.myValidation.value)
      this.myValidation.reset();
    }
  }
}
