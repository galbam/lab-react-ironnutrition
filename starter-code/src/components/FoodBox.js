import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {

      //state = {
     //      quantity: 1
     // }

     constructor(props){
          super(props);

          this.state = {
               quantity: props.food.quantity
          }
     }

     handleChange = (event) => {

          const {value} = event.target;
          this.setState({
               quantity: Number(value)
          });
     }

     addTodayFood = (id) => {

          this.props.addTodayFood(id);
     }

     render() {

          const {id, name, calories, image } = this.props.food;

          return (
               <div className="box">
                    <article className="media">
                         <div className="media-left">
                              <figure className="image is-64x64">
                                   <img src={image} alt="x" />
                              </figure>
                         </div>
                         <div className="media-content">
                              <div className="content">
                                   <p>
                                        <strong>{name}</strong> <br />
                                        <small>{calories} cal</small>
                                   </p>
                              </div>
                         </div>
                         <div className="media-right">
                              <div className="field has-addons">
                                   <div className="control">
                                        <input
                                             className="input"
                                             type="number"
                                             value={this.state.quantity}
                                             onChange={this.handleChange}
                                        />
                                   </div>
                                   <div className="control">
                                        <button onClick={() => this.addTodayFood({
                                             id,
                                             name,
                                             calories,
                                             quantity: this.state.quantity
                                             })} className="button is-info">
                                             +
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </article>
               </div>
          )
     }
}

export default FoodBox;
