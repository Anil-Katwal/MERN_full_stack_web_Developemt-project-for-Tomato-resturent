import fs from 'fs';
import path from 'path';
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
    console.error('Error adding food:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error('Error fetching food list:', error);
    res.json({ success: false, message: 'Error fetching food list', details: error.message });
  }
};

export const removeFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({ success: false, message: 'Food item not found' });
    }

    // Delete the image file associated with the food item
    const imagePath = path.resolve(food.image);
    fs.unlink(imagePath, async (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
        return res.status(500).json({ success: false, message: 'Error deleting image file', details: err.message });
      }

      // Delete the food item from the database
      await foodModel.findByIdAndDelete(id);

      res.json({ success: true, message: 'Food item removed successfully' });
    });
  } catch (error) {
    console.error('Error removing food:', error);
    res.status(500).json({ success: false, message: 'Error removing food', details: error.message });
  }
};
