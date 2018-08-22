import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, AfterViewInit {

  blogItems: any;
  constructor(private db: AngularFirestore, private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
    this.blogItems = this.db.collection('/blogs').valueChanges();
  }
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }

}
