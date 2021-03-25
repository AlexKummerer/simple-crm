import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  userId: string = '';
  user: User = new User();
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

  editMenu() {
    const dialogRef = this.dialog.open(DialogEditAddressComponent, {});
  }

  editUserDetail() {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {});
  }
}
