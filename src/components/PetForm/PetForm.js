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
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.dispatch( {type: 'ADD_PET', payload: this.state} );
    }

    render(){
        return(
            <form>
                <h2>Add Pet</h2>
                <input type="text" name="name" placeholder="Pet Name" onChange={this.handleChange} />
                <input type="text" name="color" placeholder="Color" onChange={this.handleChange} />
                <input type="text" name="breed" placeholder="Breed" onChange={this.handleChange} />

                <select name="owner" value={this.state.owner} onChange={this.handleChange} >
                    <menuitem value="Bob" >Bob</menuitem>
                    <menuitem value="Jim" >Jim</menuitem>
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