import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  user: User =new User();
  birthDate: Date;
  userId: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
  }

  saveUser() {
    console.log(this.birthDate);
    this.user.birthDate = new Date(this.birthDate).getTime()
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }
}
