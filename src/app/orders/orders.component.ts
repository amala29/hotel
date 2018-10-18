import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { User } from '../user';
import { Item } from '../cart/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private service: OrdersService) {
  }

  

  ngOnInit() {
    this.service.getOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        console.log(error);
      }
    );
  }
  }


export interface Order {
  _id: String;
  cart: Item[];
}