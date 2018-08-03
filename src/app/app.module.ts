import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes, ROUTES} from '@angular/router';
import { FormControl} from '@angular/forms';
import { NewpageComponent } from './newpage/newpage.component';
import { RegisterComponent } from './register/register.component';
import {RegisterserviceService} from './registerservice.service';
import { RedblackDirective } from './redblack.directive';
import {AuthService} from './auth.service'
const router:Routes=[
  {
    path: '',
    component:RegisterComponent 
  },
  
  {
    path:'newpage',
    component:NewpageComponent,
    canActivate:[AuthService]
  },
  {
    path:'**',
    redirectTo:'register'
     
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    NewpageComponent,
    RegisterComponent,
    RedblackDirective
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [RegisterserviceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule  { 

  name=new FormControl('');
}