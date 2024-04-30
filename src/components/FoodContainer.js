import FoodForm from './FoodForm'
import FoodCard from './FoodCard'
import { useState } from 'react'

function FoodContainer() {

    const [food, setFood] = useState([])
    

    function handleAddFood(newFood) {
        console.log('Adding new food:', newFood)
        setFood([...food, newFood]) 
    }

    

    return(
        <div className="container">
            <FoodForm onAddFood={handleAddFood}/>
            <h2 className="mt-5">Tracked Foods</h2>
            <FoodCard food={food}/>
        </div>
    )
}

export default FoodContainer


