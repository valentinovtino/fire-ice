import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { sendToStore } from '../../actions/index';
import { fetchHouses } from '../../apiCalls/apiCalls';
import Container from '../container/Container'

class App extends Component {


  async componentDidMount() {
    const houses = await fetchHouses();
    await this.props.sendToStore(houses);

  };
  
  render() {
    
   console.log(this.props)
    
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>

          {/* { houses.length > 0 ?
            <Container/> :
            <div>
            </div>
          } */}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

// const mapStateToProps = ({ fake }) => ({ fake });
// const mapDispatchToProps = dispatch => ({ fakeAction:
//   () => dispatch(fakeAction())
// });

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export const mapDispatchToProps = (dispatch) => ({
  sendToStore: (houses) => dispatch(sendToStore(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
