import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private browserBridge: BrowserBridgeService) { }

  ngOnInit() {
    this.browserBridge.body.init();
  }

}
