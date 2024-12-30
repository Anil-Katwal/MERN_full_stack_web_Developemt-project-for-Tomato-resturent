import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route for adding food
foodRouter.post('/add', upload.single('image'), addFood);

// Route for listing all food items
foodRouter.get('/list', listFood);

// Route for removing a food item by ID
foodRouter.delete('/remove/:id', removeFood);

export default foodRouter;
