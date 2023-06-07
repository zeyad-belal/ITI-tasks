import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third';

  dataParent: { name: string, age: string, email: string } = { name: "", age: "", email: "" };
  getData(data:any){
    this.dataParent = data;
  }
}
