import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {registration} from './action';
import {connect} from 'react-redux';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            address: '',
            telephone:'',
            company: '',
            dob: '',
        };
    }

    firstname (evt) {
        this.setState({firstname: evt.target.value});
    }
    lastname (evt) {
        this.setState({lastname: evt.target.value});
    }
    company (evt) {
        this.setState({company: evt.target.value});
    }
    address (evt) {
        this.setState({address: evt.target.value});
    }
    telephone (evt) {
        this.setState({telephone: evt.target.value});
    }
    dob (evt) {
        this.setState({dob: evt.target.value});
    }

    submitbutton(){
        this.props.registration(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitbutton}>
                    <input type="text" name="firstname" placeholder="first name" value={this.state.firstname} onChange={this.firstname.bind(this)}/><br/>
                    <input type="text" name="lastname" placeholder="last name" value={this.state.lastname} onChange={this.lastname.bind(this)}/><br/>
                    <input type="text" name="company" placeholder="compnay" value={this.state.company} onChange={this.company.bind(this)}/><br/>
                    <input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.address.bind(this)}/><br/>
                     <input type="text" name="telephone" placeholder="telephone xxx-xxxx-xxx" pattern="^\d{3}-\d{4}-\d{3}$" value={this.state.telephone} onChange={this.address.bind(this)}/><br/>
                    <input type="date" name="dob" placeholder="dob" value={this.state.dob} onChange={this.dob.bind(this)}/><br/>
               <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}
function  mapStateToProps(dispatch){
    return bindActionCreators({registration}, dispatch);
}
export default connect(()=>{},mapStateToProps())(Registration)