const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getDate();
    const originalname = file.originalname;
    // const extension = path.extname(file.originalname);

    cb(null, `${timestamp}-${originalname}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 8 * 1000 * 1000 // 8mb
  }
});

module.exports = upload;