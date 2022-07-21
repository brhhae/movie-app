import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ActivatedRoute, Params } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firestore: AngularFirestoreModule,
              private route: ActivatedRoute ) { 

  }
  ngOnInit() {
   
  }
 


}
