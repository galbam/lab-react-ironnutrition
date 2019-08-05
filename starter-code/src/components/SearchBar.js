import React, { Component } from 'react';

class SearchBar extends Component {

     handleChange = event => {
          event.preventDefault();

          const value = event.target.value;

          this.props.searchFood(value);
     }

     render() {
          return (
               <div>
                    <input style={{width: "100%"}} type="search" name="searchFood" id="searchFood" onChange={this.handleChange} />
               </div>
          )
     }
}

export default SearchBar;
