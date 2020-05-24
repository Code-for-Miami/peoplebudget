import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label } from 'reactstrap';
import { Redirect } from 'react-router'
import Input from '../components/Input/index';
import Button from '../components/Button/index';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';

import {
    HOST,
    PORT,
    BASE_API_URL,
    PROTOCOL,
    SIGNUP_ENDPOINT
} from '../constants/constants';


const UserRegistration = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zip, setZip] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [password, setPassword] = useState('');
    const [recoveryPassword, setRecoveryPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    const handleOnSubmit = () => {
        const requestBody = {
            'fname': firstName,
            'lname': lastName,
            'email': email,
            'linkedinurl': linkedin,
            'address1': address1,
            'address2': address2,
            'zip': zip,
            'securityQuestion': securityQuestion,
            'pass': password,
            'recover': recoveryPassword
        };
        axios({
            method: 'post',
            url: `${PROTOCOL}${HOST}:${PORT}${BASE_API_URL}${SIGNUP_ENDPOINT}`,
            data: requestBody
        })
            .then((res) => {
                if (res.status === 201) {
                    setSignedUp(true);
                }
            })
            .catch((err) => {
                //TODO: Add returning of the error message to the client
                console.log(err)
            });
    }



    if (signedUp) {
        return (
            <Redirect to="/" />
        )
    }
    return(
        <div className="container-fluid">
            <div className="row" style={{ height: '100%' }}>
                <div className="col-sm-4 border-0 bg-light p-0">
                    <img src="https://via.placeholder.com/400x1200" className="w-100 vh-100" />
                </div>
                <div className="col-sm-8">
                    <Navbar options={[{ text: 'home', link: '/', auth: 0 }, { text: 'Login', link: '/login', auth: 0 }]} />
                    <div className="col mt-5">
            <h3>Sign Up</h3>
            <FormGroup className="col-4 mr-auto">
                <a href="https://www.linkedin.com/home"><Button className="btn btn-info">Linkedin</Button></a>
                </FormGroup>
            <div className="row mx-auto">
                <FormGroup className="col-md-5 ">
                    
                <Label>First Name</Label>
                <Input type="text"
                       placeholder="First Name"
                       name="first-name"
                       onChange={e => setFirstName(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-5 ">
            <Label>Last Name</Label>
                <Input type="text"
                       placeholder="Last Name"
                       name="last-name"
                       onChange={e => setLastName(e.target.value)}/>
            </FormGroup>
            </div>
            <FormGroup className="col-md-8">
                <Label>Email</Label>
                <Input type="email"
                       placeholder="Email"
                       name="email"
                       onChange={e => setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-8">
                <Label>Linkedin</Label>
                <Input type="text"
                       placeholder="Linkedin"
                       name="linkedin"
                       onChange={e => setLinkedin(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-9">
                <Label>Address</Label>
                <Input type="text"
                       placeholder="address"
                       name="address"
                       onChange={e => setAddress1(e.target.value)}/>
            </FormGroup>
            <div className="row mx-auto">
            <FormGroup className="col-md-4">
                <Label>Additional Address</Label>
                <Input type="text"
                       placeholder="additional address"
                       name="additional-address"
                       onChange={e => setAddress2(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-2">
                <Label>Zip Code</Label>
                <Input type="text"
                       placeholder="12345"
                       name="zip"
                       onChange={e => setZip(e.target.value)}/>
            </FormGroup>
            </div>
            <FormGroup className="col-md-5">
                <Label>Password</Label>
                <Input type="password"
                       placeholder="Password"
                       name="password"
                       onChange={e => setPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-5">
                <Label>Recovery Password</Label>
                <Input type="password"
                       placeholder="Recovery Password"
                       name="password"
                       onChange={e => setRecoveryPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup className="col-md-5">
                <Label>Security Question</Label>
                <Input type="text"
                       placeholder="Security Question"
                       name="security-question"
                       onChange={e => setSecurityQuestion(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                            <div class="d-flex justify-content-center">
                                <div class="col-md-4">
                                <div class="row">
                            <Button className="btn btn-block" onClick={handleOnSubmit}>Sign Up</Button>
                            </div>
                            <div class="row mt-2 d-flex justify-content-center">
                                <Link to='/login'>Already a Member?</Link>
                            </div>
                            </div>
                            </div>
                        </FormGroup>
        </div>
        </div>
        </div>
        </div>
    )
}

export default UserRegistration;