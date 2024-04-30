import { useState } from 'react'

function FoodForm({ onAddFood }) {

    const [foodName, setFoodName] = useState('')
    const [carbs, setCarbs] = useState('')
    const [proteins, setProteins] = useState('')
    const [fats, setFats] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const calories = 4 * parseInt(carbs) + 9 * parseInt(fats) + 4 * parseInt(proteins)
        
        const newFood = {
            name: foodName,
            carbs: parseInt(carbs),
            fats: parseInt(fats),
            proteins: parseInt(proteins),
            calories: calories
        }

        onAddFood(newFood)

        setFoodName('');
        setCarbs('');
        setFats('');
        setProteins('');
    }



    return(
        <div>
            <h2>Add New Food</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Food Name:
                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
                </label>
                <label>
                Carbs (g):
                <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} required />
                </label>
                <label>
                Fats (g):
                <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} required />
                </label>
                <label>
                Proteins (g):
                <input type="number" value={proteins} onChange={(e) => setProteins(e.target.value)} required />
                </label>
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}


export default FoodForm