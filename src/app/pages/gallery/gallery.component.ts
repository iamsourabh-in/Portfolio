import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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
  galleryCollections: AngularFirestoreCollection<any>;
  galleryItems: any;
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }


  constructor(private browserBridge: BrowserBridgeService, private db: AngularFirestore, private fservice: FireBaseService) { }

  ngOnInit() {

    // this.items = this.db.collection('/galleryItems').valueChanges();

    // this.db.collection('/galleryItems').snapshotChanges().subscribe(
    //   (res) => console.log(res),
    // );

    this.galleryCollections = this.db.collection('galleryItems');
    // this.blogItems = this.blogCollections.snapshotChanges().map(
    //   changes => {
    //     return changes.map(
    //       a => {
    //         const data = a.payload.doc.data();
    //         data.id = a.payload.doc.id;
    //         return data;
    //       });
    //   });

    this.galleryItems = this.galleryCollections.snapshotChanges().pipe(
      map(changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
          });
      }),
    );
  }

  save() {
    this.db.collection('galleryItems').add({
      title: 'Kitten',
      url: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
    })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

  getSingle() {
    // this.single = this.db.collection('/galleryItems').snapshotChanges()
    //   .fla(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as GalleryItem;
    //       const id = a.payload.doc.id;
    //       return { id, data };
    //     });
    //   });
  }
  getroute(id: any): string {
    return '/gallery/' + id;
  }

}