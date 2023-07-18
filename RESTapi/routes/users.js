// this is user routes where our maint routing happens like this for eg .
// GET users/ ------------ finds all users
// POST users/ ----------- Create a user
// GET users/:id --------- find user's details
// DELETE users/:id ------ Delete a user
// PATCH users/:id ------- Update a user

import { v4 as uuidv4 } from "uuid";
import express from "express";

// first consider empty database
let users = [];

const router = express.Router(); // to use router initilizing

// all routes starting with /users because we already define in the index.js

router.get("/", (req, res) => {
  res.send(users);
  console.log(users);
});

// now for creating new user we need to use post method

router.post("/", (req, res) => {
  const userID = uuidv4();
  const newUser = req.body;
  const userWithId = { ...newUser, id: userID }; // create new object & adding id

  users.push(userWithId);
  res.send(
    `Post method triggered || form bata data aayo hai so display thi with user ${newUser.fname}`
  );
});

// get users/2 => req.params
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
});

//delete the user specified by id
router.delete("/:idd", (req, res) => {
  const idToDelete = req.params.idd;
  users = users.filter((user) => user.id !== idToDelete); // filter function le jaba false return garxa taba item delete hunxa
  res.send(users);
});

// update the user details
router.patch("/:idd", (req, res) => {
  const idToUpdate = req.params.idd;

  // now find that user details with that id

  const userToUpdate = users.find((user) => user.id === idToUpdate);

  const { fname, lname } = req.body;

  if (fname) userToUpdate.fname = fname;

  if (lname) userToUpdate.lname = lname;

  // res.send("User Update ")
  res.send(users)
});

export default router;
