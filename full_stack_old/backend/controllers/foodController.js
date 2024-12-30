import foodModel from '../models/foodModel.js';

export const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newFood = new foodModel({
      name,
      description,
      price,
      image: req.file.path,
      category,
    });

    await newFood.save();
    res.status(201).json({ message: 'Food item added successfully' });
  } catch (error) {
    console.error('Error adding food:', error); // Detailed error logging
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
