const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongo connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
