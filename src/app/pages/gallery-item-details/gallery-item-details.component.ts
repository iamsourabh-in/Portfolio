import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-item-details',
  templateUrl: './gallery-item-details.component.html',
  styleUrls: ['./gallery-item-details.component.css']
})
export class GalleryItemDetailsComponent implements OnInit, AfterViewInit {


  galleryItem: any = {};
  constructor(private route: ActivatedRoute, private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // this.db.collection('galleryItems').doc(id).ref.get().then((doc) => {
    //   if (doc.exists) {
    //     this.galleryItem = doc.data();
    //   } else {
    //     console.log('No such document!');
    //   }
    // }).catch(function (error) {
    //   console.log('Error getting document:', error);
    // });

  }
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }

}
