const express = require('express');
const router = express.Router();
const Images = require('../../models/Images');
const multer = require('multer')
const path = require('path');

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
    const { profile } = req.body; 
    const { filename, path } = req.file;

    const image = new Images({ profile, filename, path });
    await image.save();

    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

router.get('/:profileId', async (req, res) => {
  try {
    const profileId = req.params.profileId;
    const condition = { profile: profileId };

    const images = await Images.findOne(condition);
    res.json(images);
  } catch (error) {
    console.error('Error fetching image path:', error);
    res.status(500).json({ error: 'Failed to fetch image path' });
  }
});

module.exports = router;
