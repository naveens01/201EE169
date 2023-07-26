const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDb = () =>
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
  app.use(express.json())

  const PORT = process.env.PORT || 9000

  app.listen(PORT,()=>{ console.log(`Running on port ${PORT}`);})