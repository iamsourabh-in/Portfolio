import { AppCONFIG } from '../config/app.config';
import { GalleryItem } from '../models/GalleryItem';
import { Injectable } from '@angular/core';
import {
    AngularFirestoreDocument,
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()
export class FireBaseService {
    galleryItem: AngularFirestoreDocument<GalleryItem>;
    galleryItems: AngularFirestoreCollection<GalleryItem>;
    constructor(private db: AngularFirestore) {

        // Get the tasks collection
        this.galleryItems = db.collection<GalleryItem>('galleryItems');
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
