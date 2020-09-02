# Filter Products

## Installation

Clone the project
```bash
git clone https://github.com/jaykumar13/productfilter.git
```

Install npm dependencies inside the project folder
```bash
cd Product filter
npm install
```

Make sure you have `angular-cli` installed. I'll try to keep this project updated with the latest `angular-cli` version.
```bash
npm install -g angular-cli
```

Start the application
```bash
ng serve or npm start
```

Now open a new tab at **localhost:4500**.

### Deploye Into server

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

configure node - express application in order to run build application.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4500/`. The app will automatically reload if you change any of the source files.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Build Server side Render

`nvm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory
`npm run serve:ssr` to run server side application ie server side render.
`server.ts` you can change port no 4000 to your desire port no to run the application.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
