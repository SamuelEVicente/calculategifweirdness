This is a very simple Gif Weirdness Calculator using React, Redux, Giphy Api, and Bootstrap for development. For testing I used Jest and Enzyme. The test are non extensive, their just simple unit tests for quickly testing app giving me a good amount test coverage to then push to deployment. In future I would like to add more extensive test for a fuller test coverage.

### `Don't Have a local enviroment setup: Just install Docker and run`

### `npm run dev:build-run`

Runs the app in development mode but in a docker enviroment.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run prod:build-run`

Runs a multistage build for web app in production mode in a docker enviroment building all the src and copying it to nginx server to serve.
Open [http://localhost:80](http://localhost:80) to view it in the browser.

### `If running Local: Install Packages`

### `npm install`

### Available Scripts

In the project directory, you can run the application using:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
