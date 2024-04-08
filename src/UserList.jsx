import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/usermanagement/getUsers`)
        .then(res => {
            const user = res.data;
            this.setState({user})
        })
    }

    render() {
        return (
            <>
                {
                 this.state.user
                    .map(user =>
                        <li key={user.id} class="list">{user.email}</li>
                    )
                }
            </>
        )
    }
}