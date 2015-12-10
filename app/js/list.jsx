import Items from './items.jsx';
import React from 'react';


var List = React.createClass({
  getInitialState(){
    return {
      columns:4,
      fontSize:1,
      columnsSelector: 'columns-4',
      fontSizeSelector: 'font-size-1',
      type: [ 'maison','roboto','roboto-condensed', 'roboto-slab']
    }
  },
  setFontsize(){
    let tempFontsize, tempSelector;
    if (this.state.fontSize === 6){ tempFontsize = 1; } else { tempFontsize = this.state.fontSize + 1; }
    tempSelector = 'font-size-' + tempFontsize;
    this.setState({
      fontSize : tempFontsize,
      fontSizeSelector : tempSelector
    });
  },
  setColumns(){
    let tempColumns, tempSelector;
    if (this.state.columns === 1){ tempColumns = 4; } else { tempColumns = this.state.columns - 1; }
    tempSelector = 'columns-' + tempColumns;
    this.setState({
      columns : tempColumns,
      columnsSelector : tempSelector
    });
  },
  render(){
    return (
      <div id="list-inner">
        <nav id="nav">
          <button onClick={this.setFontsize}>setFontsize </button>
          <button onClick={this.setColumns}>setColumns </button>
        </nav>
        <div id="inner-wrap" className={this.state.columnsSelector + " " + this.state.fontSizeSelector}>
          {
            this.state.type.map(function(item,index) {
              return <Items config={ item } key={index}/>
            })
          }
        </div>
      </div>
    )
  }
});

module.exports = List;
