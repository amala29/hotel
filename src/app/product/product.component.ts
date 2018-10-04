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
  product:any;
name=this.route.snapshot.params.name;
  constructor(private route:ActivatedRoute, private service: ProductsService) { }

  ngOnInit() {
    const categoryid = this.route.snapshot.params.categoryid;
    this.service.getProduct().subscribe(products => {
      console.log(products);
      for (const pro of products) {
        if (pro.categoryId === categoryid) {
          this.product = pro;
          console.log(this.product);
        }
      }
    });
  }

}
