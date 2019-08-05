import React, { Component } from 'react';

class TodayFood extends Component {

     render() {
          
          let elements = this.props.todayFood.map(m => {
               return (
                    <ul key={m.id}>
                         <li>{m.name}</li>
                         <li>{m.calories}</li>
                         <li>{m.quantity}</li>
                    </ul>
               );
          });

          return (
               <div>{elements}</div>
          );
     }
}

export default TodayFood;
