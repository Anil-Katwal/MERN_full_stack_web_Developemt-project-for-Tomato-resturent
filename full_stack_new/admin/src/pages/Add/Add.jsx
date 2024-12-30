import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = 'http://localhost:4000'; // Ensure this URL is correct and the backend server is running
  const [image, setImage] = useState(null); // Initial state for the image file
  const [imagePreview, setImagePreview] = useState(null); // Initial state for the image preview
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad' // Default category
  });

  // Handle form field changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle image file change and set preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price)); // Convert price to number
    formData.append('category', data.category);
    if (image) {
      formData.append('image', image); // Append image file if exists
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Salad'
        });
        setImage(null);
        setImagePreview(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the product.');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={imagePreview ? imagePreview : assets.upload_area}
              alt='Upload Preview'
              style={{ cursor: 'pointer' }}
            />
          </label>
          <input
            onChange={handleImageChange}
            type='file'
            id='image'
            hidden
            required
          />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input
            type='text'
            name='name'
            value={data.name}
            onChange={onChangeHandler}
            placeholder='Type here'
            required
          />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea
            name='description'
            value={data.description}
            onChange={onChangeHandler}
            rows='6'
            placeholder='Write content here'
            required
          />
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select
              name='category'
              value={data.category}
              onChange={onChangeHandler}
              required
            >
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure veg'>Pure veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input
              type='number'
              name='price'
              value={data.price}
              onChange={onChangeHandler}
              placeholder='$20'
              required
            />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
