// import
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload berhasil'
  })
})

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});