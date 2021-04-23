import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { FireBaseService } from '../../services/firebase.service';
import { GalleryItem } from '../../models/GalleryItem';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  
  galleryItems: any;
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }


  constructor(private browserBridge: BrowserBridgeService, private fservice: FireBaseService) { }

  ngOnInit() {

    


  }

  save() {
   
  }

  getSingle() {
    
  }
  getroute(id: any): string {
    return '/gallery/' + id;
  }

}
