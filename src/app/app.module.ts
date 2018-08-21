import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandHeadbarComponent } from './components/brand-headbar/brand-headbar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserBridgeService } from './services/BrowserBridge.service';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { GalleryItemComponent } from './pages/gallery/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandHeadbarComponent,
    GalleryComponent,
    FooterComponent,
    BlogsComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BrowserBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
