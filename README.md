# React Azure Active Directory and Passport

> react-azuread-passport

This is an example of using React, Passport, and Azure Active Directory

## Quick startup

edit the `config.js` file in `./server/config/config.js`

get a secret from the App Settings in AAD on Azure Portal and update in that file:
`clientSecret: process.env.AAD_AUTH_CLIENTSECRET` or set the `ENV` variable.

OR create a `.env` file with

```
AAD_AUTH_CLIENTSECRET=fuLat5eYB8NOT REAL=
```

### AAD App settings
In the Azure AD App, ensure that the App has permissions to `Microsoft Graph`. Specifically under Delegated permissions - `Sign in and read user profile`.

Also, ensure the Reply URLs contains `http://localhost:8080/auth/cbAdfs`



No startup both watcher and nodemon for the server
```
npm i
#the following command launches 2 concurrent processes - one is React's watch, the other id NODE js.
# they are served from the SAME Origin so no CORS concerns.
npm start
open http://localhost:8080

```

Navigate to root, click on the big button - then once logged on click on your email in the upper right corner. This dumps the `jwt` that was supplied on logon.


## Features
- Uses React for the SPA
- Provide your Azure AD Application information in a `.env` file before running.

## Configuring

### Environment file

provide an environmenbt file based upon your Application setup in Azure Active Directory.

```
AAD_AUTH_URL=https://login.microsoftonline.com/
AAD_AUTH_CLIENTID=Application ID
AAD_AUTH_CLIENTSECRET=Secret Generated from Azure Porta
AAD_AUTH_TENANT=DNS name of your tenant
MS_GRAPH_URL=https://graph.microsoft.com/
APP_SESSION_SECRET=some word just use to validate session id in passport
```

By default if no `.env` file is used, the `config.js` files are used.  


## Running

> NOTE: the commands below rely on `npx` which is part of `npm 5+`.  

```
git clone https://github.com/cicorias/react-azuread-passport myapp
cd myapp
npm install
npm run bundle
npm start

```

### Development mode

In the development mode any changes to the project are automatically re-compiled and server is restarted.
To start project in development mode open two terminal windows in the root of the project.

In the first window run:

```bash
$ npm run bundle
```

That will start the webpack in the watch mode and generate the front end files.

In the second window run:
```bash
$ npm start
```

That will start up the nodeJS back end.


### Production mode

In the production mode front end files are re-compiled and minified for production use.
To start project in production mode open two terminal windows in the root of the project.

In the first window run:

```bash
$ npm run deploy
```

In the second window run:
```bash
$ npm start
```

That will start up the nodeJS back end.
