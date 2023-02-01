import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)
  // console.log(Menu)

  const itemList = [
    ...new Set(Menu.map((curElem) => {
      return curElem.category
    })
    ),
  ];
  console.log(itemList)

  const filterItem = ((category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category
    })
    setMenuData(updatedList)
  })

  const renderMenuData = menuData.map((curElem) => {
    return (
      <>
        <MenuCard curElem={curElem} key={curElem.id} />
      </>
    )
  })
  return (
    <>
      <Navbar filterItem={filterItem} setMenuData={setMenuData} Menu={Menu} />
      <section className="main-card--cointainer">
        {renderMenuData}
      </section>
    </>
  )
}

export default Restaurant