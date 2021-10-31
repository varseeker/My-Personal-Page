// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const messages: any = {
  required: 'Field %s is Required',
<<<<<<< HEAD
  minlength: 'Field %s has %s Minimum Character',
  min: 'Field %s at Least %s and an Integer',
  email: 'Field %s, has Valid Form example@gmail.com',
=======
  minlength: 'Field %s at Least Have %s Characters',
  min: 'Field %s Must Greater than %s or an Integer',
  email: 'Correct Form: example@example.com',
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
