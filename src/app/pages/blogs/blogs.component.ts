import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {
  blogCollections:any;
  blogItems: any;
  constructor(private browserBridge: BrowserBridgeService) { }


  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    this.browserBridge.body.init();
  }

  getRoute(id: any) {
    return '/blog/' + id;
  }

}
