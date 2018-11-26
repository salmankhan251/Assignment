import React, {Component} from 'react';
import {connect} from 'react-redux';

class Result extends Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr><td>First Name:{this.props.registration.firstname}    </td></tr>
                    <tr><td>Last Name:{this.props.registration.lastname}  </td></tr>
                    <tr><td>Address:{this.props.registration.address}   </td></tr>
                    <tr><td>Company:{this.props.registration.company} </td></tr>
                    <tr><td>Telephone:{this.props.registration.telephone}</td></tr>
                    <tr><td>Dob:{this.props.registration.dob}</td></tr>
                    </tbody>
                </table>

            </div>

        );
    }
}
function  mapStateToProps(state){
    return {
        registration:state.registration
    }
}
export default connect(mapStateToProps)(Result)