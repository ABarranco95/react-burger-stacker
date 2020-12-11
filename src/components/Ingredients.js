import { Component } from 'react';

class Ingredients extends Component {

    render() {

        const burgerIngredients = this.props.ingredients.map((eachIngredient, index) => {
            
            <div>
                <li key={index}>{eachIngredient}</li>
            </div>
        })

        return (
            <div>
                <ul>
                    {burgerIngredients}
                </ul>
            </div>
        )
    }
}


export default Ingredients;