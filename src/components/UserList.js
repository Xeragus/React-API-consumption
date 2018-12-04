import React from 'react';
import User from "./User";

class UserList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const users = this.getUsers();

        return(
            <div>{users}</div>
        );
    }

    getUsers = () => {
        return this.props.users
            .map((user, key) => {
                return <User name={user.name} key={key} />
            })
    };
}

export default UserList;