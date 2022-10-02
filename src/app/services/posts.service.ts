import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import * as firebase from 'firebase/compat/app';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private angularFirestore: AngularFirestore) { }

  loadFeatured(){
    return this.angularFirestore.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    );
  }

  loadLatest(){
    return this.angularFirestore.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  loadCategoryPosts(categoryId: string){
    return this.angularFirestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    );
  }

  loadPostById(postId: string){
    return this.angularFirestore.doc(`posts/${postId}`).valueChanges();
  }

  loadSimilar(categoryId: string){
    return this.angularFirestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    );
  }

  countViews( postId: string ){

    const viewsCount = {
      views: firebase.default.firestore.FieldValue.increment(1)
    }

    this.angularFirestore.doc(`posts/${postId}`).update(viewsCount).then(() => {
      console.log("view count updated")
    });
  }


}
