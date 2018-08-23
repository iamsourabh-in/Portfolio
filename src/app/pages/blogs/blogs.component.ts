import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {
  blogCollections: AngularFirestoreCollection<any>;
  blogItems: any;
  constructor(private db: AngularFirestore, private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
    this.blogCollections = this.db.collection('blogs');
    // this.blogItems = this.blogCollections.snapshotChanges().map(
    //   changes => {
    //     return changes.map(
    //       a => {
    //         const data = a.payload.doc.data();
    //         data.id = a.payload.doc.id;
    //         return data;
    //       });
    //   });

    this.blogItems = this.blogCollections.snapshotChanges().pipe(
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

  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }

  getRoute(id: any) {
    return '/blog/' + id;
  }

}
