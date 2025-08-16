import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    let {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">

       {food_list.map((item , index) => {
          if(category === item.category || category === "all"){
            return (
              <FoodItem 
                key={index || item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            )
          }
       })}

      </div>

    </div>
  )
}


export default FoodDisplay
