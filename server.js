require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dbConnect = require('./src/config/mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', require('./src/routes'));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});

dbConnect();
