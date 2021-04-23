import { Component, OnInit } from '@angular/core';
// import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
//import { AngularFirestore } from 'angularfire2/firestore';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-gallery-item',
  templateUrl: './add-gallery-item.component.html',
  styleUrls: ['./add-gallery-item.component.css']
})
export class AddGalleryItemComponent implements OnInit {
  public title: String = '';
  public date: String = '';
  public meta: String = '';
  public pass: String = '';
  filename: String;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  finalURL: String;
  constructor(
     // private afStorage: AngularFireStorage 
    ///private db: AngularFirestore
    ) { }

  ngOnInit() {
  }
  upload(event) {
    this.filename = event.target.files[0].name;
    // const fileRef = this.afStorage.ref('/gallery/' + this.filename);
    // const task = this.afStorage.upload('/gallery/' + this.filename, event.target.files[0]);
    // // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //   finalize(() => this.downloadURL = fileRef.getDownloadURL())
    // )
    //   .subscribe();


  }

  save() {
    this.downloadURL.subscribe((res) => {
      this.finalURL = res;
      console.log(this.finalURL);
      if (this.finalURL != '' && this.pass == 'passkey') {

        // this.db.collection('galleryItems').add({
        //   title: this.title,
        //   image: this.finalURL,
        //   date: this.date,
        //   meta: this.meta
        // })
        //   .then((docRef) => {
        //     console.log('Document written with ID: ', docRef.id);
        //     this.title = '';
        //     this.date = '';
        //     this.meta = '';
        //   })
        //   .catch(function (error) {
        //     console.log('Document written with ID: ', error);
        //     // alert('Error adding document: ');
        //   });

      } else {
        alert('Invalid Request');
      }
    });
  }

}
