const mongoose = require('mongoose');

// 1. create schema

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

//2. register a model

const Fruit = mongoose.model('Fruit',fruitSchema);

//3. share it with the rest of the files

module.exports = Fruit;
