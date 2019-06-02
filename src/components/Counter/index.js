import React, {Component} from 'react';


import './style.scss';
import Child from '../Child';

class Counter extends Component {

  constructor (props) {
    super(props);
    this.state = {
      valueCounter: 0,
    }
    
  }

  changeCounter = () => {
    this.setState({
      valueCounter: this.state.valueCounter +1
    })
  }

  render() {
    console.log('Render counter');
    const isShowChild = this.state.valueCounter > 10;
    
    return (
      <div className="counter">
        <h1> Hello Counter</h1>
        <input onClick={this.changeCounter}
        type='button' 
        value='Me' />
        <h1>{this.state.valueCounter}</h1>
        { isShowChild ? <Child /> : '' }
      </div>
    );
  } 

}

export default Counter;
