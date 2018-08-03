import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
data;
  
  constructor() { }

  setdata(str){
    this.data=str;
  }


getdata()
{
  return this.data;
}
}


