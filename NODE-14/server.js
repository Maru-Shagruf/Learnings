import express from 'express';
import multer from 'multer';

const app = express();

const upload = multer({
  dest: 'uploads/', // Multer will create this folder
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit: 2MB maximum
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"), false); 
    }
  }
});


app.post('/upload', upload.single('avatar'), (req, res) => {
  res.json({ message: "Image saved successfully!", file: req.file });
});


app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

app.listen(3000, () => console.log(" Server running on port 3000"));