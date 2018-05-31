import React, {Component} from 'react';

class Card extends Component {
  constructor() {
    super();
    console.log("hiiii")
  }

  
  render() {
    const { house } = this.props;
    return (
      <div>
        <h1>{house.name}</h1>
        <p>{house.founded}</p>
        <p>{house.seats}</p>
        <p>{house.titles}</p>
        <p>{house.coatOfArms}</p>
        <p>{house.ancestralWeapons}</p>
        <p>{house.words}</p>
      </div>
    )
  }

}

export default Card;