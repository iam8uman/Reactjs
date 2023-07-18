import express from "express";
import {createNewUser,getUsers,getUserbyId,deleteById, updateById} from '../controllers/users.js'


const router = express.Router(); // to use router initilizing

// all routes starting with /users because we already define in the index.js
router.get("/", getUsers);

// now for creating new user we need to use post method
router.post("/", createNewUser);

// get users/2 => req.params
router.get("/:id", getUserbyId);

//delete the user specified by id
router.delete("/:idd", deleteById);

// update the user details
router.patch("/:idd", updateById);

export default router;
