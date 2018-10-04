import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  page = 1;
  pageSize = 10;
  products: Product[] = [];
  all: Product[] = [];
  constructor(private productService: ProductsService,
    private cartService: CartService, private route: ActivatedRoute, private service: ProductsService) {

  }



  ngOnInit() {
    const categoryid = this.route.snapshot.params.cat;


    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        if (categoryid != undefined) {
          for (const pro of products) {
            if (pro.categoryId === categoryid) {
              this.all.push(pro);


            }
          }
        }
        else {
          this.all = products;
        }
        const end = this.pageSize * this.page;
        const start = end - this.pageSize;
        this.products = this.all.slice(start, end);
      });
  }
  next() {
    if (this.all.length > (this.pageSize * this.page)) {
      this.page++;
      const end = this.pageSize * this.page;
      const start = end - this.pageSize;
      this.products = this.all.slice(start, end);
    }

  }


  prev() {
    if (this.page > 1) {
      this.page--;
      const end = this.pageSize * this.page;
      const start = end - this.pageSize;
      this.products = this.all.slice(start, end);
    }
  }

  addToCart( id: string, quantity: number) {
    this.cartService.addToCart( id, quantity);
  }

  OrderNow() {

  }
  plus(quantity) {
    let q: number = quantity.value;
    q++;
    quantity.value = q + '';
  }
  minus(quantity) {
    let q: number = quantity.value;
    if (q > 1) {
      q--;
    }
    quantity.value = q + '';
  }

}


