this is user routes where our maint routing happens like this for eg .
GET users/ ------------ finds all users
POST users/ ----------- Create a user
GET users/:id --------- find user's details
DELETE users/:id ------ Delete a user
PATCH users/:id ------- Update a user


## controllers dirctory is just for making routes simple 
Here in case of routes there are multiple callback methods which do their own works . 
Here we gonna do some work so that we just use controllers's method in routes

This makes our code so simple and easy to read.