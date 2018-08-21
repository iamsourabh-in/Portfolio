import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../../services/BrowserBridge.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  constructor(private browserBridge: BrowserBridgeService) { }

  ngOnInit() {
    this.browserBridge.body.init();
  }

}
