import { Component, OnInit } from '@angular/core';
import { WebcamUtil } from 'ngx-webcam';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs().then(x =>{
      console.log("deets",x)
    })
  }

}
