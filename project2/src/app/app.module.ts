import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventDetailComponent as EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { ShopComponent } from './shop/shop/shop.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { CartComponent } from './shop/cart/cart.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './shared/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    EventListComponent,
    ShopComponent,
    TopbarComponent,
    ProductDetailComponent,
    ProductListComponent,
    CartComponent,
    EventAddComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatToolbarModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
