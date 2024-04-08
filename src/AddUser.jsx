import React from "react";
import axios from "axios";

export default class AddUser extends React.Component {
    constructor() { 
        super(); 
        this.state = { 
            name: '',
            dateOfBirth: '',
            email: '',
            username: '',
            password: '',
            isSubscribed: false
        }; 
    } 

    handleChange(event) {
        this.setState({ name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.name)
        console.log(event.target.checked)
        
        const user = {
            name: this.state.name,
            dateOfBirth: this.state.dateOfBirth,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            isSubscribed: this.state.isSubscribed
        };

        axios.post(`http://localhost:8080/api/usermanagement/createUser`, user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label className='label'>Name</label>
                <input name='name' className='input' type='text' onChange={(event) => this.setState({name: event.target.value})}/>
                <br></br><br></br>
                
                <label className='label'>DOB</label>
                <input name="dateOfBirth" className='input' type='date' onChange={(event) => this.setState({dateOfBirth: event.target.value})}/>
                <br></br><br></br>
                
                <label className='label'>Email</label>
                <input name='email' className='input' type='email' onChange={(event) => this.setState({email: event.target.value})}></input>
                <br></br><br></br>

                <label className='label'>Username</label>
                <input name='username' className='input' type='text' onChange={(event) => this.setState({username: event.target.value})}></input>
                <br></br><br></br>

                <label className='label'>Password</label>
                <input name='password' className='input' type='password' onChange={(event) => this.setState({password: event.target.value})}></input>
                <br></br><br></br>

                <label className='label'>
                    Subscribe to our mailing list?
                </label>
                <input name='isSubscribed' className='input' type='checkbox' checked={this.state.isSubscribed} onChange={(event) => this.setState({isSubscribed: event.target.checked})}></input>
                <br></br><br></br>

                <button name='submit' onClick={() => alert("Registration successful")}>Submit</button>
            </form>
            </>
        )
    }
}