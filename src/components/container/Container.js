import React from 'react';
import { connect } from 'react-redux';
import Card  from '../Card/Card';

export const Container = ({houses}) => {
    
  const showHouses = houses.map((house) => {
    return <Card house={house} />;

  });

  return (
    <div className='card-container'>
      {showHouses}
    </div>
  );

};

export const mapStateToProps = (state) => {
  houses: state.houses;
};

export default connect(mapStateToProps)(Container);