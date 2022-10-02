import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import {Sub} from "../models/sub";

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private angularFirestore: AngularFirestore) { }

  addSubscribers(subscriberData: Sub){
    return this.angularFirestore.collection('subscribers').add(subscriberData).then(() => {
    })
  }


}
