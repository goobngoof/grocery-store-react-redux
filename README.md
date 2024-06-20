# 🥬 Yuca
A stateful grocery store app built with Redux & React

## Features 
- 🍍 View grocery inventory
- 🛒 Add items to cart 
- ➕ Update quantity of an item in cart
- 💸 Purchase all items in the cart 
<br></br>
![Yuca Demo](https://storage.googleapis.com/frankie-esparza-portfolio/gifs/yuca.gif)

## Overview
**Redux Store** 
- `produce` list of purchasable items, searchable by id
- `cart` items currently in the cart, each with an id & quantity

**React Components** 
- `Cart` user's items
- `ProduceList` array of produce items
- `ProduceDetails` one produce item 

**React Hooks**
- `useEffect` used for
    - on app load, dispatch `populateProduce` action to add all produce to the Redux store
    - show `Cart` sidebar whenever `cart` state changes (e.g. user adds an item)
- `useSelector` used for
    - in the `ProduceList` component to get the `produce` slice of state

## Setup 
`npm install`  
`npm start`
