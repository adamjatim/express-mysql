const logRequest = (req, res, next) => {
  console.log('Terjadi request ke PATH: ', req.path);
  next(); // continue after middleware
}

module.exports = logRequest;