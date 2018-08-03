import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {

  constructor(private router: Router,private RegisterServiceService : RegisterserviceService) { }
  editform()
  {
    this.router.navigate(['/register']);
  }
  data:any;
  ngOnInit() {
    // this.data = JSON.parse(localStorage.getItem('Data'))
    this.data=this.RegisterServiceService.getdata();
  }

}