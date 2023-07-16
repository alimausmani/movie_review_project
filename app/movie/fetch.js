fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&');
.then((res) => res.json())
      .then((data) => {
        console.log(data)
  const movies = data.slice(0, 10); 

