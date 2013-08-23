Mongoose Default Connection
===========================

Best practice for creating a default Mongoose connection.

The connection is opened at application start, and closed on application termination.

All of the relevant code is in /model/db.js.

app.js is just a minimal Node.js skeleton.

This only requires Mongoose in the application, as noted in package.json. If you download this you can install Mongoose into the application by running `npm install`