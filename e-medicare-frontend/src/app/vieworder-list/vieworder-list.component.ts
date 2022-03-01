import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vieworder } from '../vieworder';
import { VieworderService } from '../vieworder.service';
@Component({
  selector: 'app-vieworder-list',
  templateUrl: './vieworder-list.component.html',
  styleUrls: ['./vieworder-list.component.css']
})
export class VieworderListComponent implements OnInit {
  vieworders: Observable<Vieworder[]>=new Observable;


  constructor(private vieworderService: VieworderService,private router: Router) { }

  ngOnInit(): void {
    this.getVieworder();
  }

  getVieworder()
  {
    this.vieworders=this.vieworderService.getVieworders();
  }
  
  deleteVieworder(id: number) {
    this.vieworderService.deleteVieworders(id)
      .subscribe(
        data => {
          console.log(data);
          this.getVieworder();
        },
        error => console.log(error));
  }

  VieworderDetails(id: number){
    this.router.navigate(['details1', id]);
  }
  updateVieworder(id: number)
  {
    this.router.navigate(['update1', id]);
  }
}


