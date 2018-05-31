import React, {Component} from 'react';
import { getSwornMems } from '../../apiCalls/apiCalls';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  handleClick = async () => {
    const { house } = this.props;
    this.setState({ clicked: !this.state.clicked})

    // console.log(house)
    const swornMems = await getSwornMems(house);
    const combine = await this.props.houses.map((house, index) => {
      house.swornMems = swornMems[index];
      return house;
    });

  }
  
  render() {
    const { house } = this.props;

    const members = house.swornMembers.map(member => {
      return <li>{member.name}</li>
    })

    const displayMembers = this.state.clicked ? members : ''



    return (
      <div

      >

        { house &&
      <div>
        <h1>Name: {house.name}</h1>
        <p>Founded: {house.founded}</p>
        <p>Seats: {house.seats}</p>
        <p>Title: {house.titles}</p>
        <p>C.O.A: {house.coatOfArms}</p>
        <p>Ancestral Weapon: {house.ancestralWeapons}</p>
        <p>Words: {house.words}</p>
        <button onClick={this.handleClick}>More Info </button>
        <ul>{displayMembers}</ul>
      </div>
        }
      </div>
    );
  }

}

export default Card;