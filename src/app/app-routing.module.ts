import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MovieItemComponent } from './home/movie-list/movie-item/movie-item.component';
import { WatchlistComponent } from './user/watchlist/watchlist.component';
import { WatchedlistComponent } from './user/watchedlist/watchedlist.component';
import { MyReviewsComponent } from './user/my-reviews/my-reviews.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'details', component: MovieItemComponent },
    { path: 'details/:id', component: MovieItemComponent },
    { path: 'user', component: UserComponent, children: [
      {path: '', component: MyReviewsComponent},
      {path: 'watchlist', component: WatchlistComponent},
      {path: 'watchedlist', component: WatchedlistComponent},
      {path: 'my-reviews', component: MyReviewsComponent}
    ]}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
