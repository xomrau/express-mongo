//const mongoose = require(mongoose);
const Person = require('../../models/personSchema');
const express = require('express');
const router = express.Router();
const dbConnection = require('../../models/db');

// add 1 document entry into 'testing' collection
router.get('/test-person', function (req, res) {
    const testPerson = {
        name: 'Dan Andrew',
        age: 50,
        favoriteFoods: ['apple', 'pizza']
    };
    Person.create(testPerson, function (err, person) {
        if (err) {
            console.log(err);
            res.send('An error has occured!');
        } else {
            console.log(person);
            res.json({ person });
        }
    });
})

// return all documents in 'testing' collection
router.get('/test-person/get-all', function (req, res) {
    Person.find({}, function (err, people) {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            console.log(people);
            res.json(people);
        }
    });
});

router.delete('/test-person/delete/:id', function (req, res) {

});

module.exports = router;