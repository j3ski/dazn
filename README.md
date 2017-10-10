This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It uses the standard scripts
## Table of Contents

- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Setup

Before you start, you need to:
- get an API key from [MovieDB](https://www.themoviedb.org), create a 
copy of `src/config.js` named `src/config.local.js` and paste it there.
- run npm/yarn install

## Folder Structure

The folder structure looks the following:

```
root/
  public/
  src/
    Components/
    utils/
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

The `src/` directory is the root of the project, it holds top-level components and configuration files.

The `src/Components/` directory holds react components & tests. We don't use routing. If it were
to be added any time in the future, pages should go to a separate directory `src/Pages` preferably.

The `utils/` directory contains utility functions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
We use enzyme for rendering

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
