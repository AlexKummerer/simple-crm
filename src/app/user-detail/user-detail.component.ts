import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  userId: string = '';
  user: User = new User ;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params.id;

      console.log('The id of this route is: ', params.id);
      console.log('Got ID', this.userId);
      this.getUser();
    });
  }
  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log('Retrieved user', this.user);
        
      });
  }
}
