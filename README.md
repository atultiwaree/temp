# Note : How it all worked like earlier without combining of reducers

See first I made increment reducer
Second I mader decrtement reducer

Note : action for both i included on action.js file wherever i need i can import like in the case of button group where i needed to send both increment and decrement action to dispatcher

4. then made a root reducer where i imported bother inc and dec reducer used useCombine for combining both the reducer and nothing more

5. After exporting root reducer just went to store.js where createStore factory resides i passed rootReducer to it

6. Note: I initialized the state on inc and dec reducer may be we can't do as earlieer in store

7. So after all these just imported Dispatcher on action.js and passed action as an argument to dispatcher

8.And last everything went awesome...:)

