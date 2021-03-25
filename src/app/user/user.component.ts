import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}
  allUsers = [];

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({idField: 'customIdName'})
      .subscribe((changes: any) => {
        this.allUsers = changes;
        console.log('changes ',changes)
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal}
    });
  }
}
