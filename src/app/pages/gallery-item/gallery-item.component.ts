import { Component, OnInit, Input } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { FireBaseService } from '../../services/firebase.service';
import { GalleryItem } from '../../models/GalleryItem';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input()
  galleryItem: any = {};

  items: any;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private location: Location, private browserBridge: BrowserBridgeService) {




  }

  ngOnInit() {
    this.browserBridge.body.init();

  }

  getItemfromRoute(id: any) {
    // this.db.collection('/galleryItems', ref => ref.where('id', '==', id));
    // this.galleryItem = this.db.collection<GalleryItem>('/galleryItems').doc(id).valueChanges();  }

  }
  getroute(id: any): string {
    return '/gallery/' + id;
  }
}
