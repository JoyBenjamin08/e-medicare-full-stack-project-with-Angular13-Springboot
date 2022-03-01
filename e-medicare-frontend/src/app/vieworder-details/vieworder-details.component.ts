import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vieworder } from '../vieworder';
import { VieworderService } from '../vieworder.service';
@Component({
  selector: 'app-vieworder-details',
  templateUrl: './vieworder-details.component.html',
  styleUrls: ['./vieworder-details.component.css']
})
export class VieworderDetailsComponent implements OnInit {
  id: number=0;
  vieworder: Vieworder=new Vieworder();


  constructor(private route: ActivatedRoute,private router: Router,private vieworderService: VieworderService) { }

  ngOnInit(): void {
    this.vieworder = new Vieworder();

    this.id = this.route.snapshot.params['id'];
    
    this.vieworderService.getVieworder(this.id)
      .subscribe(data => {
        console.log(data)
        this.vieworder = data;
      }, error => console.log(error));
      //this.list();
  }

  list(){
    this.router.navigate(['vieworders']);
  }
  }


