import FoodItem from './FoodItem'

function FoodCard({food}) {

    const foodItem = food.map(foodObj => (
        <div className='col-2 m-3'>
            <FoodItem {...foodObj}/>
        </div>
    ))

    return(
            <div className='row'>
                {foodItem}
            </div>
    )
}


export default FoodCard