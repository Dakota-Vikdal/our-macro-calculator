
function FoodItem({name, carbs, fats, proteins, calories}) {

    return(
        <div className="card mb-3">
        <div className="card-body d-flex flex-column flex-md-row align-items-md-center">
          <h5 className="card-title">{name}</h5>
          <div className="ml-md-auto">
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