import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { GalleryItemComponent } from './pages/gallery-item/gallery-item.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { FireBaseService } from './services/firebase.service';
// Third Party

import { CKEditorModule } from 'ng2-ckeditor';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { GalleryItemDetailsComponent } from './pages/gallery-item-details/gallery-item-details.component';
import { AddGalleryItemComponent } from './pages/add-gallery-item/add-gallery-item.component';
import { AngularFireStorage } from 'angularfire2/storage';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    GalleryItemComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    GalleryItemDetailsComponent,
    AddGalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [BrowserBridgeService, FireBaseService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
