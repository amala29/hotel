import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;

  constructor(private route:ActivatedRoute, private service: ProductsService) { }

  ngOnInit() {
    const _id = this.route.snapshot.params._id;
    this.service.getProduct().subscribe(products => {
      console.log(products);
      for (const pro of products) {
        if (pro._id === _id) {
          this.product = pro;
          console.log(this.product);
        }
      }
    });
  }
}
