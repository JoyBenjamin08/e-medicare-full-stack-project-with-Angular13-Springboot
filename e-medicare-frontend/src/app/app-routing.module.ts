import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
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
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';




import { CartBuyComponent } from './cart-buy/cart-buy.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
const routes: Routes = [ {
  path: '', pathMatch: 'full', redirectTo: 'home'
},
{
  path: 'home',component:HomeComponent,
  children: [  {path: '',component: AboutComponent },
    {path: 'first',component: Tab1Component},
    {path: 'second',component: Tab2Component}, 
  


  {path:'about',component:AboutComponent},  
  {path: 'contact',component: ContactComponent}, 
  { path: 'vieworder', component: VieworderListComponent },
 



]},
{
path: 'home',
children: [  
  {path:'register',component:RegistrationComponent},
  
 {path: 'adminlogin',component:AdminloginComponent},
  {path: 'login', component: LoginComponent},
]},
{path: '', pathMatch: 'full', redirectTo: 'adminpage'
},
{
  path: 'adminpage',component:AdminpageComponent,
  children: [  

  { path: '', redirectTo: 'medicine', pathMatch: 'full' },
  { path: 'medicine', component: MedicineListComponent },
  { path: 'addmed', component: CreateMedicineComponent },
 { path: 'home',component:HomeComponent},
  { path: 'vieworder', component: VieworderListComponent },
{ path: 'add', component: CreateVieworderComponent },
  { path: 'update/:id', component: UpdateVieworderComponent },
  { path: 'details/:id', component: VieworderDetailsComponent },
  { path: 'product', component: CartBuyComponent},
 
  {path: 'first',component: Tab1Component},
  {path: 'second',component: Tab2Component}, 
]},
{ path: 'update/:id', component: UpdateMedicineComponent },
{ path: 'details/:id', component: MedicineDetailsComponent },
{ path: 'update1/:id', component: UpdateVieworderComponent },
{ path: 'details1/:id', component: VieworderDetailsComponent },

{
  path: 'userpage',component:UserpageComponent,
  children: [  
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', component: CartBuyComponent},
    { path: 'medicine', component: MedicineListComponent },
 
    { path: 'addmed', component: CreateMedicineComponent },
    { path: 'update/:id', component: UpdateMedicineComponent },
    { path: 'details/:id', component: MedicineDetailsComponent },
    { path: 'cart', component: CartListComponent },
    { path: 'add', component: CreateCartComponent },
   
    { path: 'update/:id', component: UpdateCartComponent },
    { path: 'details/:id', component: CartDetailsComponent },
    { path: 'vieworder', component: VieworderListComponent },

    
    
]},{path:'login',component:LoginComponent},
{
  path: 'userpage',
  children: [  
    {path:'registration',component:RegistrationComponent},
    
    {path:'login',component:LoginComponent},
  ]},
 
{ path: 'cart', component: CartListComponent },
{ path: 'updatecart/:id', component: UpdateCartComponent },
{ path: 'detailscart/:id', component: CartDetailsComponent },
{ path: '', redirectTo: 'transaction', pathMatch: 'full' },
{ path: 'transtatus', component: TranscationListComponent},
{ path: 'details/:id', component: TranscationDetailsComponent },
{ path: 'update/:transid', component: UpdateTranscationComponent},
{path:'registration',component:RegistrationComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
