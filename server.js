require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dbConnect = require('./src/config/mongodb');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});

dbConnect();
