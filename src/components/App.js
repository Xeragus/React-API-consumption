import React from 'react';
import User from "./User";
import UserList from "./UserList";

const users = [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <UserList users={users} />
            </div>
        );
    }
}

export default App;