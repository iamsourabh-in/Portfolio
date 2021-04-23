import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../services/BrowserBridge.service';
// import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  public editorValue: String = '';
  public image: String = 'assets/images/img-1.jpg';
  public title: String = '';
  public date: String = '';
  public meta: String = '';
  public pass: String = '';


  constructor( private browserBridge: BrowserBridgeService) { }
  save() {
    if (this.editorValue !== '' && this.pass === 'passkey') {

      // this.db.collection('blogs').add({
      //   title: this.title,
      //   image: this.image,
      //   date: this.date,
      //   docText: this.editorValue,
      //   meta: this.meta
      // })
      //   .then(function (docRef) {
      //     console.log('Document written with ID: ', docRef.id);
      //     this.title = '';
      //     this.editorValue = '';
      //   })
      //   .catch(function (error) {
      //     console.log('Document written with ID: ', error);
      //     // alert('Error adding document: ');
      //   });

    } else {
      alert('Invalid Request');
    }
  }
  ngOnInit() {
    this.browserBridge.body.init();
  }
  onChange(e) {

  }
  onEditorChange(e) { }

  onReady(e) { }

  onFocus(e) { }

  onBlur(e) { }

  onContentDom(e) { }

  onFileUploadRequest(e) { }

  onFileUploadResponse(e) { }

  onPaste(e) { }

  onDrop(e) { }
}
