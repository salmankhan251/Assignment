import React, {Component} from 'react';
import Registration from './registration';
import Result from './resultdata';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Routers extends Component{
    render(){
        return(
            <Router>
            <div>

                    <ul>
                        <li>
                            <Link to="/Link1"><button>Registration</button></Link>
                            <Link to="/Link2"><button>Show Result</button></Link>
                        </li>
                    </ul>


                <Route path="/Link1" component={Registration} />
                <Route path="/Link2" component={Result}/>

            </div>
            </Router>

        );
    }


}