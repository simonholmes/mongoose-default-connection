Mongoose Default Connection
===========================

A quick guide to the best practice for creating, maintaining and using a default Mongoose connection.

The connection is managed in `/model/db.js`. It is opened at application start, and closed on application termination. In this file we also monitor the `connected`, `error` and `disconnected` events.

A sample Mongoose schema is defined and model built in `/model/team.js`.
All of the relevant code is in /model/db.js.

`app.js` is just a minimal Node.js skeleton, rendering a page defined in `pages.js`. `pages.js` brings in Mongoose and the model defined in `/model/team.js`.

This only requires Mongoose in the application, as noted in package.json. If you download this you can install Mongoose into the application by running `npm install`

More detailed discussion around using this is available on my blog: [http://theholmesoffice.com/mongoose-connection-best-practice/](http://theholmesoffice.com/mongoose-connection-best-practice/)