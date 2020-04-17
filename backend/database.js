const mongoose = require('mongoose');

//const MONGODB_URI = process.env.MONGODB_URI;
//console.log(MONGODB_URI);
//mongodb://localhost/javascriptdb
mongoose
  .connect('mongodb+srv://admin:admin123@book-hmxtl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('db is connect'))
  .catch((err) => console.error(err));
