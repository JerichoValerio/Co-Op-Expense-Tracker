const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  return res.send("Endpoints are here!");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})