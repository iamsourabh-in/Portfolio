import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, AfterViewInit {

  blogItems: any = {};
  constructor(private route: ActivatedRoute,  private browserBridge: BrowserBridgeService) {


  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.db.collection('blogs').doc(id).ref.get().then((doc) => {
    //   if (doc.exists) {
    //     this.blogItems = doc.data();
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
