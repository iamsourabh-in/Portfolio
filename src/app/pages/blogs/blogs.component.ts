import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {
  blogItems: any;
  constructor(private db: AngularFirestore, private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
    this.blogItems = this.db.collection('/blogs').valueChanges();
  }
  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }

}
