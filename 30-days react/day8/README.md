## What i learned from this EP18?
@codevolution

## useReducer()
-used for state management (wait what ? for state management we already have useState ?)

-exactly it is an alternative of useState in better way.

JS have reduce() method in array and imporoved version of this is the useReducer

## ----------------------------------------

Not much but I just learned the concept of reduce methods in js and its replica on reactjs. 
Important 2 things
** useReducer(reducer,initialState) // takes 2 parameter **
** reducer(currentState,action) // which also takes 2 paramter **

useReducer returns 2 values i.e. newstate,dispatch

## Remember it is alternative of useState for state management.



# ---------------------------------------------

# What i learned from this EP19

step by step 
1. useReducer(reducer,initialState)
useReducer takes 2 parameter as an argument 1st one is reducer function( used in js) and 2nd one is initialState

2. initialState =0

3. now define reducer method
reducer(state,action)

apply switch cases and display respective state value.

4. Remember useReducer hooks return 2 values i.e. 
        [newState, dispatch]
newState is the state returned from reducer method
dispatch is a method which will rendor with the respective state

here we use onClicked={()=>dispatch("Increment")} i.e.
dispatch method rendors Increment state from reducers method in switch case. 

@iam8uman

I just add some text to increase commit now .

Another one too .