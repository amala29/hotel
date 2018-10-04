import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from './orders.service';
import { User } from '../user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  currentUser:User;
  myOrders:Order[]=[];
  constructor(private service: OrdersService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.orders = this.service.orders;
    for (const order of this.orders) {
      if (order.userId === this.currentUser.userId) {
        this.myOrders.push(order);
      }
    }
  }

  

  ngOnInit() {
  }

}
