import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router'



class OwnerForm extends Component {

state = {
   newOwner: {
       name: '',
   }
}

addOwner = (event) => {
    event.preventDefault(); 
   console.log('add an owner', this.state.newOwner);
    this.props.dispatch({ type: 'ADD_OWNER', payload: this.state.newOwner })
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newOwner:  {
          ...this.state.newOwner,
          [propertyName]: event.target.value,
        }
      })
    }
}

render() {
   return (
       <section>
       <h2>Add Owner</h2>
        <form>
            <input type="text"
            value= {this.state.newOwner.name}
            onChange={this.handleChangeFor('name')}/>
            <br/>
            <button onClick={this.addOwner}>Submit</button>
        </form>
     </section>
   );
 }
}

const mapStateToProps = reduxState => ({
    reduxState,
 });

export default (connect(mapStateToProps)(OwnerForm));