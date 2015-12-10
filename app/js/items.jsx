import React from 'react';



var Items = React.createClass({
  // ??
  // getDefaultProps(){
  //   return {
  //     value: 'default value'
  //   };
  // },
  getInitialState(){
    let currentTemp = 10;
    return {
      currentTemp : currentTemp
    };
  },
  setTemperature(e){
    this.setState({ currentTemp: e.target.value });
  },
  render(){
    let stateOfMatter;
    if (this.state.currentTemp <= this.props.config.boiling) {
      stateOfMatter = 'Liquid';
    } else {
      stateOfMatter = 'Boiling';
    }
    return (
      <div>
        <input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp }/>
        <p>{ this.props.config.name } - { this.state.currentTemp }°C : State = "{ stateOfMatter }"</p>
      </div>
    )
  }
});



module.exports = Items;


//
// module.exports = React.createClass({
//   getInitialState(){
//     return {
//       initialItems: [
//         "eins",
//         "zwei",
//         "drei"
//       ]
//     }
//   },
//   render(){
//     return (
//       <ul>{
//         this.state.initialItems.map(function(item) {
//           return <li key={item}>{item}</li>
//         })}
//       </ul>
//     )
//   }
// });
