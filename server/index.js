const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.post('/movies', (req, res) => {
  db.save(req.body)
  res.status(200).send('OK');
});

app.get('/movies', (req, res) => {
  db.retrieve().exec()
  .then((response) => {
    const movieList = [];
    for (let i = 0; i < response.length; i++) {
      movieList.push({title: response[i].title});
    }
    res.status(200).send(movieList);
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));