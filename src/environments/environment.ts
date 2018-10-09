// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAaGRThQ6AfMBtUexPfUREX5bP2ouf4icE",
    authDomain: "funga-9f9df.firebaseapp.com",
    databaseURL: "https://funga-9f9df.firebaseio.com",
    projectId: "funga-9f9df",
    storageBucket: "funga-9f9df.appspot.com",
    messagingSenderId: "1064252843272"
  },
  serverUrl: "http://127.0.0.1:8000"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
