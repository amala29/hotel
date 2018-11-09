import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { AuthComponent } from "./auth/auth.component";
import { SignupComponent } from "./signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductComponent } from "./product/product.component";
import { OrdersComponent } from "./orders/orders.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { ErrorComponent } from "./error/error.component";
import { InfoComponent } from "./info/info.component";


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:cat',
        component: ProductsComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'reservation',
        component: ReservationComponent
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },


        ]
    },
   
    {
        path: '**',
        component: ErrorComponent

    }

];


