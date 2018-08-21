import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private browserBridge: BrowserBridgeService) { }

  ngOnInit() {
    this.browserBridge.body.init();
  }

}
