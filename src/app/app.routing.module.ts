import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { WorkComponent } from './pages/work/work.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryItemComponent } from './pages/gallery/gallery-item/gallery-item.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:id', component: GalleryItemComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
