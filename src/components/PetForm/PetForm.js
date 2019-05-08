import React, { Component } from 'react';
import { connect } from 'react-redux';


class PetForm extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner: '',
    }

    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch( {type: 'ADD_PET', payload: this.state} );
    }

    render(){
        const ownerList = this.props.reduxState.rootReducer.addOwner;
        console.log( ownerList );
        

        return(
            <form>
                <h2>Add Pet</h2>
                <input type="text" name="name" placeholder="Pet Name" onChange={this.handleChange} />
                <input type="text" name="color" placeholder="Color" onChange={this.handleChange} />
                <input type="text" name="breed" placeholder="Breed" onChange={this.handleChange} />

                <select name="owner" value={this.state.owner} onChange={this.handleChange} >
                    {ownerList.map( (owner, i) => 
                            <option key={i} value={owner.name}>{owner.name}</option>
                        )}
                </select>

                <button type="submit" onClick={this.handleSubmit} >Submit</button>

            </form>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect( mapReduxStateToProps )( PetForm );