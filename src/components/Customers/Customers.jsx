import React, {Component, setState} from 'react';
import classes from "./Customers.module.css";
import Modal from "./Modal/Modal";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import divWithClassName from "react-bootstrap/esm/divWithClassName";

const Child = ({match}) => (
    <div>
        <h3>ID: {match.params.id}</h3>

        {/*<Route path={match.params.id} render={() => <Modal/>} />*/}
    </div>
)

class Customers extends Component {

    render() {
        return (
            <Router>
                <div>
                <h1 className={classes.h1}>CustomerTestT</h1>
                    <ul>
                        <li><Link to='/customers/1'>Vasya</Link></li>
                        <li><Link to='/customers/2'>Tasya</Link></li>
                        <li><Link to='/customers/3'>Masya</Link></li>
                        <li><Link to='/customers/4'>Dasya</Link></li>
                    </ul>
                    <Route path='/customers/:id' component={Child} />
                </div>
            </Router>
        );
    }
}

export default Customers;