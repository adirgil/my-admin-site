import React from 'react';
import UsersTB from '../components/UsersTB';
import '../css/Main.css'
import About from '../components/About';

class Main2 extends React.Component {

    constructor(props) {
        super(props);

        this.usersTable = '';
        this.state = {
            showDetails: '',
            users: []
        };
    }

    getUsersTable = () => {
        fetch('http://localhost:5000/users', {
            })
                .then(res => res.json())
                .then(res => {
                    this.usersTable = <UsersTB users={res} getUsersTable={this.getUsersTable}/>
                    this.setState({
                        showDetails: this.usersTable
                    })
                })
    }

    heandleUsers = (e) => {
        e.preventDefault();
        if (this.usersTable === '') {
            this.getUsersTable();
        } else {
            this.setState({
                showDetails: this.usersTable
            })
        }

    }


    render() {


        return (
            <div className="main">
                <h1>Main2</h1>
                <div className="contant">
                    <div className="manuSide">
                        <ul>
                            <li onClick={this.heandleUsers}>show users</li>
                            <li onClick={() =>this.setState({showDetails: <About />})}>about</li>
                            <li>contact</li>
                        </ul>
                        <button onClick={this.heandleUsers} className="showBtn">Show Users</button>
                    </div>

                    <div className="detailsSide">
                        {this.state.showDetails}
                    </div>

                </div>

            </div>

        );
    }
}


export default Main2;

