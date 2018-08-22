import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-gallery-item-details',
  templateUrl: './gallery-item-details.component.html',
  styleUrls: ['./gallery-item-details.component.css']
})
export class GalleryItemDetailsComponent implements OnInit, AfterViewInit {

  items: any = {};
  constructor(private db: AngularFirestore, private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
    this.items = this.db.collection('/galleryItems').valueChanges();
    console.log(this.items);
  }
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }
}
