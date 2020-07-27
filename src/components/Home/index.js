import React, {useState} from "react";
import {
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import { useAlert } from 'react-alert'


export default function Home() {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const history = useHistory();
      const alert = useAlert()

      function loginNow() {
        axios({
          method: 'post',
          url: 'https://droplink.gokdeniz.me/login',
          data: {
            username: username,
            password: password,
          }
        })
        .then((response) => {
          var response_data = response.data
          var response_status = response_data["status"]
          if (response_status === 1) {
            var session_data = response_data["session"]
            sessionStorage.setItem('session', session_data)
            sessionStorage.setItem('username', username)
            history.push('/account');
          } else {
            alert.error('Login failed')
          }
        }, (error) => {
          console.log(error);
        });      
      }
      if (sessionStorage.getItem("session")) {
        return (
          <Redirect to="/account" />
        );
      } else {
      return (
          <div>
            <div class="container">
              <br />
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="box">
                    <h1 class="title">Easy DAO Onboarding</h1>
                    <h2 class="subtitle">You need to enter your credentials to login</h2>
                    <hr/>
                    <div class="field">
                      <label class="label">Username</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                        <input class="input" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                      </div>
                    </div>
                    <button class="button is-primary" onClick={loginNow}>Login</button>
                    <br/><br/>
                    <p>Don't have an account? Create an account <Link to="/register">here</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}