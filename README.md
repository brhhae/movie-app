# MovieApp
## Setup
- Create database `CREATE DATABASE movieapp;`
- Set database username and password *be/src/main/resources/application.properties*

## Endpoints
### Movie
- **GET** localhost:8080/movies
    - **returns** List\<Movie>
- **GET** localhost:8080/movie/{id}
    - **returns** Movie

### Reviews
- **GET** localhost:8080/reviews
    - **returns** List\<Review>
- **GET** localhost:8080/reviews/movie/{id}
    - **returns** List\<Review>
- **GET** localhost:8080/reviews/user/{id}
    - **returns** null 
- **POST** localhost:8080/review
    - **action** create review for a specific movie
    - **body** Review
    - **returns** List\<Review> 
- **GET** localhost:8080/deleteReview?id={}
    - **params** id  *of review*
    - **returns** void 
- **GET** localhost:8080/updateReview?id={}&title={}&text={}
    - **params** id *of review*, title, text
    - **returns** void
     




