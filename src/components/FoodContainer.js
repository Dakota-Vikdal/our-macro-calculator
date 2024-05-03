import FoodForm from './FoodForm'
import FoodCard from './FoodCard'
import { useState } from 'react'
import { Card, CardBody } from 'react-bootstrap';

function FoodContainer() {

    const [food, setFood] = useState([])
    

    function handleAddFood(newFood) {
        console.log('Adding new food:', newFood)
        setFood([...food, newFood]) 
    }

    

    return(
        <div className='py-3 px-5'>
            <Card style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container">
                    <FoodForm onAddFood={handleAddFood}/>
                    <div className="mt-5 mb-4">
                        <h2>All Foods</h2>
                    </div>
                    <FoodCard food={food}/>
                </div>
            </Card>
        </div>
    )
}

export default FoodContainer


