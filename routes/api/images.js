const express = require('express');
const router = express.Router();
const Images = require('../../models/Images');
const multer = require('multer')
const path = require('path');
const { log } = require('console');

const storage = multer.diskStorage({
  destination: './client/public/uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post('/', upload.array('image', 5), async (req, res) => {
  console.log('Image route');
  try {
    const { profile } = req.body; 
    const uploadedImages = req.files;
    const imageObject = uploadedImages.map(image => ({
      filename: image.filename,
      path: image.path,
    }))
    const imageFile = ({
      profile: profile,
      images: imageObject
    });

    let Image = await Images.findOneAndUpdate(
      { profile: profile },
      { $set: imageFile },  
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

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
