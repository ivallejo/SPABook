if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log(process.env.NODE_ENV);
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//initializations
const app = express();
require('./database');

const PORT = process.env.NODE_PORT || 3000;
const ENV = process.env.NODE_ENV || 'Development';

//settings
//app.set(`port`, PORT || 3000);

//midlewares ( todos lo midlewares de express son funciones)
app.use(morgan('dev'));

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//routes
app.use('/api/books', require('./routes/books'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start the server
// app.listen(app.get(`port`), () => {
//   console.log(`Server on server`, app.get(`port`));
// });

app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`);
});
