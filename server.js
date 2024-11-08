// server.js

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// STEP 3

// server.js (Add this code inside your server.js file)

const Person = require("./models/person");

const createAndSavePerson = () => {
  const person = new Person({
    name: "John Doe",
    age: 30,
    favoriteFoods: ["Pizza", "Burger"],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    console.log("Person saved:", data);
  });
};

createAndSavePerson();

// STEP 4

// server.js (Add this code inside your server.js file)

const arrayOfPeople = [
  { name: "Jane Doe", age: 25, favoriteFoods: ["Pasta", "Salad"] },
  { name: "Alice", age: 28, favoriteFoods: ["Steak", "Fries"] },
  { name: "Bob", age: 35, favoriteFoods: ["Sushi", "Ice Cream"] },
];

const createManyPeople = (peopleArray) => {
  Person.create(peopleArray, (err, data) => {
    if (err) return console.error(err);
    console.log("People created:", data);
  });
};

createManyPeople(arrayOfPeople);

// STEP 5

// server.js (Add this code inside your server.js file)

const findPeopleByName = (name) => {
  Person.find({ name: name }, (err, data) => {
    if (err) return console.error(err);
    console.log("People found:", data);
  });
};

findPeopleByName("John Doe");

// STEP 6

// server.js (Add this code inside your server.js file)

const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    console.log("Person found:", data);
  });
};

findOneByFood("Pizza");

// STEP 7

// server.js (Add this code inside your server.js file)

const findPersonById = (personId) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);
    console.log("Person found by ID:", data);
  });
};

findPersonById("person_id_here"); // Replace with an actual ID

// STEP 8

// server.js (Add this code inside your server.js file)

const findEditThenSave = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push("hamburger");
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("Person updated:", updatedPerson);
    });
  });
};

findEditThenSave("person_id_here"); // Replace with an actual ID

// STEP 9

// server.js (Add this code inside your server.js file)

const findAndUpdate = (personName) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("Person updated:", updatedPerson);
    }
  );
};

findAndUpdate("John Doe");

// STEP 10

// server.js (Add this code inside your server.js file)

const removeById = (personId) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    console.log("Person removed:", removedPerson);
  });
};

removeById("person_id_here"); // Replace with an actual ID

// STEP 11

// server.js (Add this code inside your server.js file)

const removeManyPeople = (name) => {
  Person.remove({ name: name }, (err, result) => {
    if (err) return console.error(err);
    console.log("People removed:", result);
  });
};

removeManyPeople("Mary");

// STEP 12

// server.js (Add this code inside your server.js file)

const queryChain = () => {
  Person.find({ favoriteFoods: "burritos" })
    .sort("name")
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log("Query results:", data);
    });
};

queryChain();
