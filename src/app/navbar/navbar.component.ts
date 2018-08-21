import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../services/BrowserBridge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private browserBridge: BrowserBridgeService, private router: Router) { }

  ngOnInit() {
  }
  openItem(page: String) {
    this.browserBridge.nativeExtra.closeNavOnItemClick();
    this.router.navigate([page]);
  }

}
