import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imgSrc="assets/imgs/avatar-01.png"
  imgSrcs=["assets/imgs/avatar-01.png", "assets/imgs/avatar-02.png", "assets/imgs/avatar-03.png"]
  currentImgNum = 0;

  next(){
    if(this.currentImgNum == 2){
      return
    }
    this.imgSrc = this.imgSrcs[this.currentImgNum+1]
    this.currentImgNum++
  }

  prev(){
    if(this.currentImgNum == 0){
      return
    }
    this.imgSrc = this.imgSrcs[this.currentImgNum-1]
    this.currentImgNum--
  }

  myInterval:any;
  slide(){
    this.myInterval = setInterval(()=>{
      if(this.currentImgNum == 2){
        this.currentImgNum = -1
      }
      this.imgSrc = this.imgSrcs[this.currentImgNum+1]
      this.currentImgNum++
    },1000)
  }

  stop(){
    clearInterval(this.myInterval)
  }

}
