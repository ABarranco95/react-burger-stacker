import './App.css';
import { Component, React } from 'react';
import BurgerStack from './components/BurgerStack';
import Ingredients from './components/Ingredients';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      burgerItems: []
    }
  }

  moveToBurger = (item) => {
    const burgerItem = [...this.state.burgerItems]
    burgerItem.push(item)
    this.setState({burgerItems: burgerItem})
  }

  removeFromBurger = (item) => {
    this.setState({
      burgerItems: []
    })
  }


  render() {
    return (
    <div className="App">
      <div className="left">
        <Ingredients ingredients={this.state.ingredients} moveToBurger={this.moveToBurger}/>
      </div>
      <div className="right">
        <BurgerStack burgerItem={this.state.burgerItems} removeFromBurger={this.removeFromBurger} />
      </div>
    </div>
  );
  }
}

export default App;
