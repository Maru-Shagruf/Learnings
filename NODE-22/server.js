import express from 'express';
import multer from 'multer';

const app = express();

//1. SERVE STATIC FILES
app.use('/uploads', express.static('uploads'));


//2. MULTER SETUP & VALIDATION 
const storage = multer.diskStorage({
  destination: 'uploads/', 
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error("Only images are allowed!"));
  }
});



//3. THE UPLOAD ROUTE
app.post('/upload', upload.single('profilePic'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please upload an image." });
  }

  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  res.status(200).json({ 
    success: true, 
    message: "Profile image uploaded!",
    imageUrl: imageUrl 
  });
});

// 4. ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

app.listen(3000, () => console.log(" Upload API running on port 3000"));