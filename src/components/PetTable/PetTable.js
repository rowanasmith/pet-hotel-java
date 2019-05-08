import React, { Component } from 'react';
import {connect} from 'react-redux';




class PetTable extends Component {

//the results from the API request will be mapped and displayed in this table
  render() {
    return (
      <div>
        <header>
        <h3>History</h3>
        </header>
        <table className="petTable">
          <thead>
            <tr><th>Owner</th><th>Pet</th><th>Breed</th>
            <th>Color</th><th>Checked In</th><th>Breed</th><th>Actions</th></tr>
          </thead>
          <tbody>

            
          </tbody>
        </table>
      </div>
    );
    }
}
const mapStateToProps = state => ({
    movieSearchResults: state.movieSearchResults,
  });
export default connect(mapStateToProps)(PetTable);
