import { Component , Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html'
})
export class StudComponent implements OnChanges{

  @Input() dataFromParent:any;
  arrOfData:{name:string,age:string,email:string}[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    if(!changes["dataFromParent"].firstChange){
      this.arrOfData.push(this.dataFromParent)
    }
  }

}
