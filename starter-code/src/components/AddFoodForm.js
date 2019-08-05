import React, { Component } from 'react';
import uGuid from 'uuid/v1';

class AddFoodForm extends Component {

     state = {
          name: "",
          calories: 0,
          image: "",
          quantity: 0
     };

     handleSubmit = event => {
          event.preventDefault();

          const newFood = {
               id: uGuid(),
               name: this.state.name,
               calories: Number(this.state.calories),
               image: this.state.image,
               quantity: Number(this.state.quantity)
          };

          this.props.pushFood(newFood);

          this.setState({
               name: "",
               calories: 0,
               image: "",
               quantity: 0
          });
     };

     handleChange = event => {
          const name = event.target.name;
          const value = event.target.value;

          this.setState({
               [name]: value
          });
     };

     render() {

          let qty = this.state.quantity;
          return (
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                         onChange={this.handleChange}
                         type="text"
                         name="name"
                         id="name"
                         value={this.state.name}
                    />

                    <label htmlFor="calories">Calories: </label>
                    <input
                         onChange={this.handleChange}
                         type="number"
                         name="calories"
                         id="calories"
                         value={this.state.calories}
                    />

                    <label htmlFor="quantity">Quantity: </label>
                    <input
                         onChange={this.handleChange}
                         type="number"
                         name="quantity"
                         id="quantity"
                         value={qty}
                    />

                    <label htmlFor="image">Image: </label>
                    <input
                         onChange={this.handleChange}
                         type="text"
                         name="image"
                         id="image"
                         value={this.state.image}
                    />

                    <button type="submit">Add Food</button>
               </form>
          )
     }
}

export default AddFoodForm;
