// this is user routes where our maint routing happens like this for eg .
// GET users/ ------------ finds all users
// POST users/ ----------- Create a user
// GET users/:id --------- find user's details
// DELETE users/:id ------ Delete a user
// PATCH users/:id ------- Update a user

import { v4 as uuidv4 } from "uuid";
import express from "express";

const users = [
  {
    fname: "Upasana",
    lname: "Devkota",
  },
  {
    fname: "Suman",
    lname: "Sharma",
  },
];

const router = express.Router(); // to use router initilizing

// all routes starting with /users because we already define in the index.js

router.get("/", (req, res) => {
  res.send(users);
  console.log(users);
});




// now for creating new user we need to use post method 

router.post("/", (req, res) => {


  const userID=uuidv4()
  const newUser=req.body;
  const userWithId={...users,id:userID} // create new object & adding id 
  
  users.push(newUser);
  res.send(
    `Post method triggered || form bata data aayo hai so display thi with user ${newUser.fname}`
  );
  console.log(userWithId);
});

export default router;
