import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third';

  dataParent : {name:string, age:string}[] = [] ;
  getData(data:any){
    this.dataParent.push(data)

  }
}
