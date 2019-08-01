import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerList extends Component {

 componentDidMount = () => {
   this.props.dispatch({ type: 'GET_OWNERLIST', payload: this.props.reduxState.ownerReducer });
 }

 deleteOwner = (id) => {
     console.log(`hit deleteOwner!`);
    //  this.props.dispatch( {type: 'DELETE_OWNER', payload: id} );
 }

 render() {
   return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Number of Pets
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {this.props.reduxState.rootReducer.addOwner.map(owner =>
                    <tr key={owner.id}>
                        <td>
                            {owner.name}
                        </td>
                        <td>
                        
                            {owner.pets}
                        </td>
                        <td>
                        <button value={owner.id} onClick={this.deleteOwner(owner.id)}>
                            Delete
                        </button>
                        </td>
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

export default (connect(mapStateToProps)(OwnerList));