import { Component, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private browserBridge: BrowserBridgeService) { }

  ngAfterViewInit() {
    //this.browserBridge.body.init();
  }

}
