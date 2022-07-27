const mongoose = require('mongoose');

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (error) => {
    if (!error) {
      console.log(`Conectado com o mongodb`);
    }
    console.log('error de conexão');
  });
};

module.exports = dbConnect;
