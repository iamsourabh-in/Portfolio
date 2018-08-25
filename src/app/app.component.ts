import { Component, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from './services/BrowserBridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MyPort';

  constructor(private browserBridge: BrowserBridgeService) { }


  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }
}
