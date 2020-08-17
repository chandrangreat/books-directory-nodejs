const express = require('express');
const port = 3000;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/api/v1/books', books);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
