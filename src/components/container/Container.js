import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Container = (props) => {

  const showHouses = props.houses.map((house, index) => {
    return <Card house={house} key={index}/>;
  });

  return (
    <div className='card-container'>
      {showHouses}
    </div>
  );
};

const mapStateToProps = (state) => ({
  houses: state.houses
});

export default connect(mapStateToProps)(Container);