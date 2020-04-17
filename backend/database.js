const mongoose = require('mongoose');

//const MONGODB_URI = process.env.MONGODB_URI;
//console.log(MONGODB_URI);
//mongodb://localhost/javascriptdb
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('db is connect'))
  .catch((err) => console.error(err));
