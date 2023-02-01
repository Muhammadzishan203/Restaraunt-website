import React from 'react'

const Navbar = ({filterItem,setMenuData,Menu}) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={()=> setMenuData(Menu)}>All</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar