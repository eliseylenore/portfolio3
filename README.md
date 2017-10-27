# My Portfolio
### By **Elise St Hilaire**, hosted site here: [https://capstone-project-9ac28.firebaseapp.com/](https://capstone-project-9ac28.firebaseapp.com/)
![alt text](src/assets/img/hello.png)


## A smattering of the programming I've done.

### Description
_I started programming about a year ago. Since that time, I've created multiple projects that use various technologies. These include everything from simple HTML to JavaScript frameworks (such as Angular and Ember) to C# projects created in Visual Studio that incorporate a SQL database._

_With this site, I hope to feature a few of those projects that I am proud of._

### Installation
Run the following commands to install dependencies:
```sh
$ npm install
$ bower install
```

### Setup Firebase
_Since this site uses a Firebase database, you'll need to acquire your own credentials for that database._

_Simply open your own account on the [Firebase website](https://firebase.google.com/)_

_Next, go to your user dashboard area and click **Create a New Project**.  Select **Add Firebase to your web app* and Firebase should respond with a pop-up window with your credentials._

_Now that your database exists, create a new file called **api-keys.ts** in the **src/app** directory. Then, place your Firebase credentials, like this:_

```sh
export var masterFirebaseConfig = {
  apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
};
```

### Serve
Run the following command to run the app:
```sh
$ ng start
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## User stories/Specs

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
