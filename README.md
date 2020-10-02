# Svelte Electron Boilerplate

## Installation
Clone repository to get started
```
npx degit hjalmar/svelte-electron-boilerplate <app-name>
cd <app-name>
npm install
```
### Electron
NOTE: electron dev script relies on `nodemon` to listen for file changes. Instead of installing nodemon as a package install it globally with the `-g` flag.

https://www.npmjs.com/package/nodemon
```
npm install -g nodemon
```

To run dev server. Execute following command in your terminal from the 
root directory 
```
npm run electron
```
or to launch electron with devtools open
```
npm run electron:devtools
```

### Frontend
To spawn frontend dev server simply cd into `frontend-app`, install and launch the dev script
```
cd frontend-app
npm install
npm run dev
```

## Build
Launching the electron build will first build the `frontend-app` before being packaged to an electron application.

From root directory. Execute following build script
```
npm run build
```

The build step is managed by the [electron-builder](https://www.electron.build/) library. To configure the build step, refer to it's documentation.

NOTE: Currently only windows configured out of the box.

## Frontend libraries used
This boilerplate is customized by me for me so and the reason why these packages is included by default.

* https://github.com/hjalmar/enums-manager
* https://github.com/hjalmar/hotkeys-manager
* https://github.com/hjalmar/svelte-standalone-router

### Your own frontend
If you want to change frontend-app simply make sure that your build output is pointed to `frontend-app/public` or make the neccessary changes in `electron/config.js` and the root `package.json` file.

To replace it with a blank svelte app, start by removing the contents of `frontend-app` and follow the instructions over at https://svelte.dev/ to install a blank template.

# Branding
Logos and icons used in this boilerplate is my personal brand. Use them as references to change to your own custom icons which are more suitable for your application.

# Support

Open source in all it's glory is amazing and I personally love to share the knowledge I've accumulated over my years programming 
and doing webdevelopment. A couple of __$dollars__ a month would help greatly to incentivize having packages up to date 
and the tools and services sometimes needed to be able to do so.

While it's 100% not required, if you find this project beneficial to you and your work, any contribution would be highly appreciated.

https://www.paypal.me/jenshjalmarsson

Additional support like bug reporting and feature requests are also highly encouraged. Do so in respective 
package repository that it may concern. Cheers!

https://github.com/hjalmar
