import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { EventAddComponent } from './event-add/event-add.component';



const routes: Routes = [
{ path: 'events', component: EventListComponent },
{ path: 'event/:id', component: EventDetailComponent },
{ path: 'event-add', component: EventAddComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'product/:id', component: ProductDetailComponent },
{ path: 'cart', component: CartComponent },
{ path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
