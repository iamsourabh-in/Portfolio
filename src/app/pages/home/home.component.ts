import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private browserBridge: BrowserBridgeService) { }

  ngOnInit() {
    this.browserBridge.body.init();
  }

}
