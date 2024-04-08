import { useState } from 'react'
import './Form.css'

export default function Form() {
    const [name, setName] = useState("")
    const [check, setCheck] = useState(false)

    function handleChange(e) {
        setName(e.target.value);
    }
    
    return (
        <>
        <form>
            <label className='label'>
                Name
            </label>
            <input id='name' className='input' value={name} onChange={handleChange}/>
            
            <br/>
            <p>
                Your name is: {name}
            </p>
            <label className='label'>
                DOB
            </label>
            <input id="dob" className='input' type='date'/>
            <br></br><br></br>
            
            <label className='label'>
                Email
            </label>
            <input id='email' className='input' type='email'></input>
            <br></br><br></br>

            <label className='label'>
                Username
            </label>
            <input id='username' className='input' type='text'></input>
            <br></br><br></br>

            <label className='label'>
                Password
            </label>
            <input id='password' className='input' type='password'></input>
            <br></br><br></br>

            <label className='label'>
                {check.valueOf(true) ? 'Subscribed' : "Subscribe to our mailing list?"}
            </label>
            <input id='subscribe' className='input' type='checkbox' value={check} onClick={() => setCheck(!check)}></input>
            <br></br><br></br>
        </form>
        </>
    );
}
    