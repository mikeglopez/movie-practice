const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieList');

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true
  }
});

const Movie = new mongoose.model('Movie', movieSchema);

const save = (movie) => {
  const record = new Movie(movie);
  record.save();
}

const retrieve = () => {
  return Movie.find();
}

module.exports.save = save;
module.exports.retrieve = retrieve;