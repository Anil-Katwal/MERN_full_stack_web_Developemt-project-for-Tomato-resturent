import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" name="firstName" placeholder='First name' value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder='Last name' value={formData.lastName} onChange={handleChange} required />
        </div>
        <input type="email" name="email" placeholder='Email address' value={formData.email} onChange={handleChange} required />
        <input type="text" name="street" placeholder='Street' value={formData.street} onChange={handleChange} required />
        <div className='multi-fields'>
          <input type="text" name="city" placeholder='City' value={formData.city} onChange={handleChange} required />
          <input type="text" name="state" placeholder='State' value={formData.state} onChange={handleChange} required />
        </div>
        <div className='multi-fields'>
          <input type="text" name="zipCode" placeholder='Zip code' value={formData.zipCode} onChange={handleChange} required />
          <input type="text" name="country" placeholder='Country' value={formData.country} onChange={handleChange} required />
        </div>
        <input type="text" name="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="place-order-right">
        <p className='title'>Payment Information</p>
        <input type="text" name="cardNumber" placeholder='Card Number' value={formData.cardNumber} onChange={handleChange} required />
        <div className='multi-fields'>
          <input type="text" name="cardExpiry" placeholder='Expiry Date (MM/YY)' value={formData.cardExpiry} onChange={handleChange} required />
          <input type="text" name="cardCVV" placeholder='CVV' value={formData.cardCVV} onChange={handleChange} required />
        </div>
      </div>
      <button type="submit" className='submit-button'>Place Order</button>
    </form>
  );
};

export default PlaceOrder;
