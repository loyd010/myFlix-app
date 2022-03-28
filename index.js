const express = require('express'),
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

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
