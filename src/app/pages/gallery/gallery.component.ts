import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private browserBridge: BrowserBridgeService) { }

  ngOnInit() {
    this.browserBridge.body.init();
  }

}
