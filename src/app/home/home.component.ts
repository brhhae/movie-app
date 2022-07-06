import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firestore: AngularFirestoreModule) { 

  }
  ngOnInit(): void {
  }
 


}
