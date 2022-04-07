const express = require('express'),
morgan = require('morgan'),
bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(morgan('common'));

let movies = [
  {
    title: 'The Martian',
    director: 'Ridley Scott',
    genre: 'adventure, science fiction'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'action, science fiction'
  },
  {
    title: 'The Departed',
    director: 'Martin Scorsese',
    genre: 'crime, drama, thriller'
  },
  {
    title: 'Blood Diamond',
    director: 'Edward Zwick',
    genre: 'drama, thriller'
  },
  {
    title: 'The Goonies',
    director: 'Richard Donner',
    genre: 'adventure, comedy'
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'drama'
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    genre: 'action, crime'
  },
  {
    title: 'Saving Private Ryan',
    director: 'Steven Spielberg',
    genre: 'drama, war'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    genre: 'drama, science fiction'
  },
  {
    title: 'Snatch',
    director: {
      Name: 'Guy Ritchie',
      Age: 53
    },
    genre: {
      Name: 'comedy'
    }
  }
];

let users = [
  {
    userName: {
      Favorites: {
        Name: ''
      },
      Removals: {
        Name: ''
      },
      Registration: ''
    }
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to Tara\'s Top Ten Movies!');
});

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

/*Start of code for Exercise 2.5
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find( movie => movie.title === title );

  if (movie) {
    res.status(200).json(movie);
  }  else {
    res.status(400).send('This movie not found')
  }
});

app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find( movie => movie.genre.Name === genreName ).genre;

  if (genre) {
    res.status(200).json(genre);
  }  else {
    res.status(400).send('This genre not found')
  }
});

app.get('/movies/director/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find( movie => movie.director.Name === directorName ).director;

  if (director) {
    res.status(200).json(director);
  }  else {
    res.status(400).send('This director not found')
  }
});

app.post('/users', (req, res) => {
  res.send('Successful creation of a new user profile')
});

app.put('/users/:userName', (req, res) => {
  res.send('Username has been successfully updated')
});

app.post('/users/userName/:Favorites', (req, res) => {
  res.send('Your movie has been added to your Favorites')
});

app.delete('/users/userName/:Removals', (req, res) => {
  res.send('Your movie has been removed from your Favorites')
});

app.put('/users/userName/:Registration', (req, res) => {
  res.send('User email has successfully been removed')
});
*/

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
