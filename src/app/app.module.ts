import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AppRoutes } from './routes';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ReservationComponent,
    ProductsComponent,
    OrdersComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent,
    InfoComponent,
    ErrorComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    RouterModule.forChild(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
