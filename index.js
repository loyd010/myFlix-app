const express = require('express'),
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
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
    director: 'Guy Ritchie',
    genre: 'comedy, crime'
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to Tara\'s Top Ten Movies!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
