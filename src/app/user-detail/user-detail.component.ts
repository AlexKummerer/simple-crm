import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 
userId : string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id

      console.log('The id of this route is: ', params.id);
      console.log('Got ID' , this.userId);
      
    });
  }



}
