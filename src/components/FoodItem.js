
function FoodItem({name, carbs, fats, proteins, calories}) {

    return(
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between"> 
                <div>
                    <h5 className="card-title">{name}</h5>
                    {/* <p><strong>Food Name: {name}</strong></p> */}
                    <p className="card-text">
                        <strong>Carbs: {carbs}g</strong>
                        <br />
                        <strong>Fats: {fats}g</strong>
                        <br />
                        <strong>Proteins: {proteins}g</strong>
                        <br />
                        <strong>Calories: {calories}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default FoodItem