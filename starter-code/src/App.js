import React, { Component } from 'react';
import './App.css';

import FoodBox from './components/FoodBox';
import foodsX from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';

class App extends Component {

  state = {
    foods: foodsX.slice(),
    todays: []
  }

  pushFood = food => {
    
    let newFood = [...this.state.foods];

    newFood.unshift(food);

    this.setState({
      foods: newFood
    });

  }

  addTodayFood = (food) => {
    
    let newTodays = this.state.todays.slice();

    newTodays.push(food);

    this.setState({
      todays: newTodays  
    });
        
  }

  searchFood = search => {

    if(search){
      let newFood = foodsX.slice().filter(food => {
        return food.name.toLowerCase().match(search.toLowerCase())
      });

      this.setState({
        foods: newFood
      });
    }
    else{
      this.setState({
        foods: foodsX.slice()
      });
    }
  }

  render() {

    const elements = this.state.foods.slice().map(food => {
      return <FoodBox key={food.id} food={food} addTodayFood={this.addTodayFood} />
    });

    return (

      <div className="box">
        <article className="media">

          <div className="media-left">
            <AddFoodForm pushFood={this.pushFood} />
            <SearchBar searchFood={this.searchFood}/>
            {elements}
          </div>
        
          <div className="media-right">
            <h1>Today's food</h1>
            <TodayFood todayFood={this.state.todays}/>
          </div>
        
        </article>
      </div>
    );
  }
}

export default App;
