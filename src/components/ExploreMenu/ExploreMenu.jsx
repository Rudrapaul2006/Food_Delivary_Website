import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing Iusto dignissimos quibusdam dolorem facere nam, beatae ad asperiores<br /> at aperiam incidunt Lorem ipsum dolor sit amet .</p>
      <div className="explore-menu-list">
        {menu_list.map((item , index) => {
            return (
                <div onClick={() => setCategory((prev) => prev === item.menu_name ? "all":item.menu_name ) }  key={index} className='explore-menu-list-item'>
                    <img className= {category === item.menu_name?"active":""} src={item.menu_image}  />
                    <p className= {category === item.menu_name?"activett":""} > {item.menu_name} </p>
                </div>
            )
        } )}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
