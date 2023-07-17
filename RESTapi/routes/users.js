// this is user routes where our maint routing happens like this for eg .
// GET users/ ------------ finds all users
// POST users/ ----------- Create a user
// GET users/:id --------- find user's details
// DELETE users/:id ------ Delete a user
// PATCH users/:id ------- Update a user

import express from "express";

const users = [
  {
    userId: 1,
    id: 2,
    name: "Upasana Devkota",
    desc: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 2,
    id: 3,
    name: "SumanTheProgrammer",
    desc: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

const router = express.Router(); // to use router initilizing

// all routes starting with /users because we already define in the index.js
router.get("/", (req, res) => {
  res.send(users);
  console.log(users)
});


router.post('/',(req,res)=>{
    console.log("post method triggered");
    res.send("Post method triggered || form bata data aayo hai so display this")
})

export default router;
