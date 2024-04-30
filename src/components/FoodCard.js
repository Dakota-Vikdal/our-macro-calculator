import FoodItem from './FoodItem'

function FoodCard({food}) {

    const foodItem = food.map(foodObj => (
        <FoodItem {...foodObj}/>
    ))

    return(
            <div>
                {foodItem}
            </div>
    )
}


export default FoodCard