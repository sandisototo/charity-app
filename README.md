# Sandiso Toto Charity App

This is a charity angular app to demonstrate how to use RXJS, EventEmitters, Reusable components and other angular 2,4,5,6+ awesome modules

# Run the project

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```

2. Run mock API server, and the API server will run on  `localhost:3000` in your browser:
 ```bash
 json-server --watch db.json
 ```
 Note: Make sure you have `json-server` installed globally on your matchine :)

3. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start                     | Run development server on `http://localhost:4200/`
npm run build [-- --env=prod] | Build app for production in `dist/` folder
json-server --watch db.json   | Run mock api server on `localhost:3000` data can be found or edited in `db.json`

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootsrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
