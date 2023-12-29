const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config()
app.use(express.json())

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB conectado")
  } catch(error){
    throw error
  }
}

const importRoutes = require('./src/routes/importRouter.js');

app.listen(3000, () => {
  connect();
  console.log('Servidor iniciado na porta 3000');
});

app.use('/api', importRoutes);

