const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]

});

const Person = mongoose.model("Person", personSchema);
//The first argument is the singular name of the 'collection' your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. 
//Thus, for the example above, the model Person is for the 'people' collection in the database.

module.exports = Person;