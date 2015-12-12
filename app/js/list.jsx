import Items from './items.jsx';
import React from 'react';
import ReactSlider from 'react-slider';


var List = React.createClass({
  getInitialState(){
    return {
      columns:4,
      fontSize:2,
      columnsSelector: 'columns-4',
      type: [ 'maison','roboto','roboto-condensed', 'roboto-slab']
    }
  },
  setFontsize(){
    document.getElementById('inner-wrap').style.fontSize = event.target.style.left;
    this.setState ({
      fontSize : event.target.style.left
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
          <ReactSlider defaultValue={this.state.value} onChange={this.setFontsize} withBars />
          <span>font-size: {this.state.fontSize}</span>
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
