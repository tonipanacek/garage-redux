import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return(
        <Link to={`/cars/${car.id}`} key={car.id}>
        <div className="car-smallad">
          <div className="car-details">
            <h3>{car.brand} {car.model}</h3>
            <h4>Owner: {car.owner}</h4>
          </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    return(
      <div className="view-container">
        <div className="aside">
          <img className="illustration" src="https://images.unsplash.com/photo-1485828560670-1f8241f74c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto" />
          <h1>Garage</h1>
          <p>Our garage is the best, <br/> we guarantee it.</p>
        </div>
        <div className="list-container">
          <ul>
            {this.renderCars()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cars: state.cars }
}

export default connect(mapStateToProps)(CarsIndex);
