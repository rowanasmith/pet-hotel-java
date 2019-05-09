import React, { Component } from 'react';
import {connect} from 'react-redux';




class PetTable extends Component {

//the results from the API request will be mapped and displayed in this table
  render() {
    const petList = this.props.reduxState.rootReducer.addPet;

    return (
      <div>
        <header>
        <h3>History</h3>
        </header>
        <table className="petTable">
          <thead>
            <tr><th>Owner</th><th>Pet</th><th>Breed</th>
            <th>Color</th><th>Checked In</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {petList.map( (pet, i) => 
                <tr key={i}>
                  <td>{pet.owner}</td>
                  <td>{pet.name}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.color}</td>
                  <td>Checked out</td>
                  <td>buttons</td>
                </tr>
              )}
            
          </tbody>
        </table>
      </div>
    );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
  });
export default connect(mapStateToProps)(PetTable);
