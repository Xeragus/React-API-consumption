import React from 'react';
import UserList from './UserList';
import axios from 'axios';

class App extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                // get the data from the endpoint
                const newUsers = response.data.map(user => {
                   return {
                       id: user.id,
                       name: user.name
                   }
                });
                console.log(response);

                // create a new state object
                const newState = Object.assign({}, this.state, {users: newUsers});

                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        );
    }
}

export default App;