import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';




import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { VieworderService } from './vieworder.service';


import { CreateCartComponent } from './create-cart/create-cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { CreateVieworderComponent } from './create-vieworder/create-vieworder.component';
import { VieworderDetailsComponent } from './vieworder-details/vieworder-details.component';
import { VieworderListComponent } from './vieworder-list/vieworder-list.component';
import { UpdateVieworderComponent } from './update-vieworder/update-vieworder.component';
import { TranscationDetailsComponent } from './transcation-details/transcation-details.component';
import { TranscationListComponent } from './transcation-list/transcation-list.component';
import { UpdateTranscationComponent } from './update-transcation/update-transcation.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineService } from './medicine.service';






import { Registrationservice } from './services/registration.service';


import { AlertModule } from './alert/alert.module';
import { CartBuyComponent } from './cart-buy/cart-buy.component';
import { LoginService } from './services/login.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Tab1Component,
    Tab2Component,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    CreateCartComponent,
    CartDetailsComponent,
    CartListComponent,
    UpdateCartComponent,
    CreateVieworderComponent,
    VieworderDetailsComponent,
    VieworderListComponent,
    UpdateVieworderComponent,
    TranscationDetailsComponent,
    TranscationListComponent,
    UpdateTranscationComponent,
    TranscationDetailsComponent,
    TranscationListComponent,
    UpdateTranscationComponent,
    AdminpageComponent,
    UserpageComponent,
    MedicineListComponent,
    CreateMedicineComponent,
    UpdateMedicineComponent,
    MedicineDetailsComponent,
  
    
   
    
    CartBuyComponent,
                     AdminloginComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
    HttpClientModule,
    AlertModule
  ],
  providers: [CartService,VieworderService,Registrationservice,LoginService,MedicineService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
