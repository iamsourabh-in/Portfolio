import { AppCONFIG } from '../config/app.config';
import { GalleryItem } from '../models/GalleryItem';
import { Injectable } from '@angular/core';


@Injectable()
export class FireBaseService {
    galleryItem: any;
    galleryItems: any;
    constructor() {

    }

    addItem(item: GalleryItem) {
        this.galleryItems.add(item);
    }
    getAllItems() {
        return this.galleryItems.valueChanges();
    }
    getItem(id: number) {
       // return this.galleryItems.doc();
    }


}
