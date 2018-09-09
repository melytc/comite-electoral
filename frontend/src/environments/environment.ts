// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config : {
    apiKey: "AIzaSyA5-JOdqhE2ZcdFq5YOkYeZe8OTTz1NpUg",
    authDomain: "comite-electoral.firebaseapp.com",
    databaseURL: "https://comite-electoral.firebaseio.com",
    projectId: "comite-electoral",
    storageBucket: "comite-electoral.appspot.com",
    messagingSenderId: "949974661394"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
