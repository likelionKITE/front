import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Body, Form } from './style'


function Signup() {
    return(
        <Body>
            <Form>
                <h1>Sign Up</h1>
                <label>
                    Email
                    <input type='email'/>
                </label>
                <label>
                    Name
                    <input type='name'/>
                </label>
                <label>
                    ID
                    <input type='id'/>
                </label>
                <label>
                    Password
                    <input type='password'/>
                </label>
                <label>
                    Re-enter password
                    <input type='password'/>
                </label>
                <button className='submit' type='submit'>회원가입</button>
            </Form>
        </Body>
    )
}

export default Signup;