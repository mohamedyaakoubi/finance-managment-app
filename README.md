# Finance Management App
A comprehensive finance management application that allows users to manage their finances effectively. This project is fully functional and integrated with Firebase, providing a seamless experience for users to track their expenses and incomes.

## Features
### Income Management: 
Record sources of income and outcome.
## Technologies Used
### Frontend:
React, TypeScript, CSS
### Database:
Firebase
## Setup Instructions
### Prerequisites
Node.js and npm installed
### Firebase project and SDK setup
## Installation
Clone the repository:

```sh
git clone https://github.com/mohamedyaakoubi/finance-managment-app.git
```
```sh
cd finance-managment-app
```
### Install dependencies:

```sh
npm install
```
## Set up Firebase:
```sh
npm install firebase
```

### Create a Firebase project at Firebase Console.
#### Add a web app to your Firebase project.
#### Obtain your Firebase configuration and add it to a .env file in the root directory:
makefile
```sh
apiKey: 'your-firebase-api-key',
authDomain: 'your-firebase-auth-domain',
projectId: 'your-firebase-project-id',
storageBucket: 'your-firebase-storage-bucket',
messagingSenderId: 'your-firebase-messaging-sender-id',
appId: '1:38110019363:web:your-firebase-app-id',
measurementId: 'your-firebase-mesurements-id',
```
## Install React Router DOM:
```sh
npm install react-router-dom
```
## Run the application:
```sh
npm start
```
## Access the app:
Open

```sh
http://localhost:3000
```
in your browser.

## Formspree Setup
### To set up Formspree(https://formspree.io/) for handling form submissions:

Go to Formspree(https://formspree.io/) and sign up.
Create a new form and copy the Formspree endpoint in the contactconfig.js file.
Use the endpoint in your React app to handle form submissions.

## Usage
Register or log in using your credentials to start managing your finances.
Add, edit, or delete expenses and income entries.
## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE(https://opensource.org/licenses/MIT) file for details.

## Deployed Version
The app is deployed and can be accessed here(https://mohamedyaakoubi.github.io/finance-managment-app/).

____________________________________________________________________________________________________________________________________________________________________________________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
