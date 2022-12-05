const express = require('express');
const app = express();


const PORT = 4000;
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const postRoute = require('./routes/post')

require('dotenv').config();

app.use(express.json());

//Throuh this command we can connect to our frontend application
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log('There was an error', error);
  } else {
    console.log('Database successfully connected!')
  }
})

// app.get('/', (req, res) => {
//   return res.send("Endpoints are here!");
// })

app.use('/api/v1/users', userRoutes);
app.use('api/v1/posts', postRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})