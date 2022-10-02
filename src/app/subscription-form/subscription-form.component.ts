import { Component, OnInit } from '@angular/core';
import {Sub} from "../models/sub";
import {SubscribersService} from "../services/subscribers.service";

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(private subscriberService: SubscribersService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any) {
    const subscriptionData: Sub = {
      name: formValue.name,
      email: formValue.email
    }

    this.subscriberService.addSubscribers(subscriptionData);
  }
}
