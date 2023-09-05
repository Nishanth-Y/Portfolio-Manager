const express = require('express');
const router = express.Router();
const Images = require('../../models/Images');
const multer = require('multer')
const path = require('path');
const { log, profile } = require('console');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  console.log('Image route');
  try {
    const { profile } = req.body; // Replace with the actual profile ID
    const { filename, path } = req.file;
    console

    const image = new Images({ profile, filename, path });

    // const image = new Images(imageFields); //filename1, path1, filename2, path2, filename3, path3 });
    await image.save();

    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

module.exports = router;
