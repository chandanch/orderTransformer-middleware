# Splunk Node.js Starter

## Prerequisites
* [Node.js](https://nodejs.org/en/download/)

## Setup
* Install **nodemon**: `npm install -g nodemon`. Nodemon tracks code changes and restarts the server with those changes automatically.
* Run `npm install`
* Start the server with nodemon: `nodemon server.js`

### Note:
This node app use two configuration one for local development and one for server deployment.

When deploying to server use the `splunkServerConfig` from *app-config.js* file.