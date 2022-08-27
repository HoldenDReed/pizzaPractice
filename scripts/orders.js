// orders.js
const orders = [
    {
      id: 1,
      crust: "Hand",
      toppings: ["pepperoni", "green pepper"],
      instructions: "extra cheese"
    },
    {
      id: 2,
      crust: "Thin",
      toppings: ["Black Olives", "green pepper"],
      instructions: "half green peppers"
    }
  ]
  
  export const getOrders = () => {
    let ordersData = orders.map(order => ({...order}))
    return ordersData
    // Add logic here to return a copy of your orders
  }
export const addNewOrder = () => {

}