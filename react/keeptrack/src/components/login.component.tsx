import { element } from 'prop-types';
import React, { useState, SyntheticEvent, useEffect } from 'react';
import { User } from '../models/user.model';
import { ApiUser } from '../projects/ProjectAPI';

interface LoginProps{
  user: User;
  onLogin: (user: User) => void;
}
// example for this component https://www.simplilearn.com/tutorials/reactjs-tutorial/login-page-in-reactjs
export default function LoginComponent() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function validateForm(): boolean{
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = (event: SyntheticEvent) => {
    console.log(username, password);
    if(!validateForm()) return;
    let loginValid: boolean = false;
    ApiUser.get_async()
      .then()
      .then(users => {

        users.map((user: any) => {
          console.log(user)
          
        })
      });
    console.log(loginValid);
    event.preventDefault();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <input type="text" id="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
          <button className="primary button rounded">Log In</button>
        </fieldset>
    </form>
    </div>
  )
}
