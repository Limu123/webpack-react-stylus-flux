import Items from './items.jsx';
import React from 'react';


var water = {
    name: "Water",
    boiling: 100
};

var ethanol = {
    name: "Ethanol",
    boiling: 70
};



var List = React.createClass({
  getInitialState(){
    return {
      items: [
        water,ethanol
      ]
    }
  },
  render(){
    return (
      <ul>
        {
          this.state.items.map(function(item,index) {
            return <li key={index}><Items config={ item }/></li>
          })
        }
      </ul>
    )
  }
});

module.exports = List;







// hello world
// module.exports = React.createClass({
//   getInitialState(){
//     let arrayx = ["eins","zwei","drei"];
//     let nameslist = arrayx.map(function(name,index){
//       return <li key={index}>{name}</li>;
//     });
//     return {
//       test : "bla",
//       asdf : "asdf",
//       nameslistx : nameslist
//     }
//   },
//   render(){
//     let blabla = "blablab";
//     // let arrayx = ["eins","zwei","drei"];
//     // let nameslist = arrayx.map(function(name,index){
//     //   return <li key={index}>{name}</li>;
//     // });
//     return (
//       <div>
//         <h1>{blabla} {this.state.test}{this.state.asdf}</h1>
//         <ul>
//           {this.state.nameslistx}
//         </ul>
//       </div>
//     )
//   }
// });

// List
// module.exports = React.createClass({
//   filterList(event){
//     var updatedList = <Items />;
//     updatedList = updatedList.filter(function(item){
//       console.log(item);
//     });
//   },
//   render(){
//     return (
//       <div>
//         <input type="text" placeholder="Search" onChange={this.filterList}/>
//         <Items />
//       </div>
//     )
//   }
// });



// filter list
// module.exports = React.createClass({
//   filterList(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState(){
//      return {
//        initialItems: [
//          "Apples",
//          "Broccoli",
//          "Chicken",
//          "Duck",
//          "Eggs",
//          "Fish",
//          "Granola",
//          "Hash Browns"
//        ],
//        items: []
//      }
//   },
//   componentWillMount(){
//     this.setState({items: this.state.initialItems})
//   },
//   render(){
//     return (
//       <div className="filter-list">
//         <input type="text" placeholder="Search" onChange={this.filterList}/>
//       <List items={this.state.items}/>
//       </div>
//     );
//   }
// });
//
// var List = React.createClass({
//   render(){
//     return (
//       <ul>
//       {
//         this.props.items.map(function(item) {
//           return <li key={item}>{item}</li>
//         })
//        }
//       </ul>
//     )
//   }
// });





// counter
// module.exports = React.createClass({
//   getInitialState(){
//     return {
//       count: 0
//     };
//   },
//   incrementCount(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   },
//   render(){
//     return <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.incrementCount}>test</button>
//       </div>;
//   }
// });





// React.Component instead of React.createClass
// class List extends React.Component {
//   render() {
//     return <h1>Hello world {this.props.name}</h1>;
//   }
// }
// export default List;
