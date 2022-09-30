# Note : How it all worked like earlier without combining of reducers

See first I made increment reducer
Second I mader decrtement reducer

Note : action for both i included on action.js file wherever i need i can import like in the case of button group where i needed to send both increment and decrement action to dispatcher

4. then made a root reducer where i imported bother inc and dec reducer used useCombine for combining both the reducer and nothing more

5. After exporting root reducer just went to store.js where createStore factory resides i passed rootReducer to it

6. Note: I initialized the state on inc and dec reducer may be we can't do as earlieer in store

7. So after all these just imported Dispatcher on action.js and passed action as an argument to dispatcher

8.And last everything went awesome...:)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

