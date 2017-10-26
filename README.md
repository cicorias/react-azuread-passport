# React Azure Active Directory and Passport

> react-azuread-passport

This is an example of using React, Passport, and Azure Active Directory

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
