import React from 'react'
import Item from './Item'
const ItemStore = () => {
    const itemData = [
        {image:"", title:"ReactJS", price:1000},
        {image:"", title:"NodeJS", price:1000},
        {image:"", title:"ExpressJS", price:1000},
        {image:"", title:"MySQL", price:1000},
        {image:"", title:"MongoDB", price:1000},
    ]
  return (
    <div className="home">
       {
            itemData.map((item, index) => (
                <Item key={index} props={item} />
            ))
        }
    </div>
  )
}

export default ItemStore
