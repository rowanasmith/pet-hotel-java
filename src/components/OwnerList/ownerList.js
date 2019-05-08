import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerList extends Component {

 componentDidMount = () => {
   this.props.dispatch({ type: 'GET_OWNERS', payload: this.props.reduxState.ownerReducer });
 }

 deleteOwner = () => {
     console.log(`hit deleteOwner!`);
 }

 render() {
   return (
/*        <div>
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
            {this.props.reduxState.ownerReducer.map(owner =>
                <tr key={owner.id}>
                    <td>
                        {owner.name}
                    </td>
                    <td>
                       
                        {owner.pets}
                    </td>
                    <td>
                    <button value={owner.id} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteOwner(e) } }>
                        Delete
                    </button>
                    </td>
                </tr>
            )}
        </tbody>
   </table>
   </div> */
   <div></div>
        );   
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
 });

export default (connect(mapStateToProps)(OwnerList));