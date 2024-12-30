import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext'; // Corrected path
import FoodItem from '../FoodItem/FoodItem'; // Ensure this path is correct

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter food_list based on the category prop
  const filteredFoodItems = category === 'All' ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodItems.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
