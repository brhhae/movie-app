import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './home/movie-list/movie-list.component';
import { MovieItemComponent } from './home/movie-list/movie-item/movie-item.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UserComponent } from './user/user.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { MoviesService } from "./services/movies.service";
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './home/movie-list/movie-item/reviews/review/review.component';
import { AddReviewComponent } from './home/movie-list/movie-item/reviews/review/add-review/add-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './home/movie-list/movie-item/reviews/reviews.component';
import { WatchlistComponent } from './user/watchlist/watchlist.component';
import { WatchedlistComponent } from './user/watchedlist/watchedlist.component';
import { MyReviewsComponent } from './user/my-reviews/my-reviews.component';
import { EditReviewComponent } from './user/my-reviews/edit-review/edit-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieListComponent,
    MovieItemComponent,
    CarouselComponent,
    UserComponent,
    RatingComponent,
    ReviewComponent,
    AddReviewComponent,
    ReviewsComponent,
    WatchlistComponent,
    WatchedlistComponent,
    MyReviewsComponent,
    EditReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [AngularFirestore, MoviesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
