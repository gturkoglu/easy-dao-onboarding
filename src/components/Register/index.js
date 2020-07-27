import React, {useState} from "react";
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import { useAlert } from 'react-alert'



export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const alert = useAlert()
    function Register() {
      axios({
        method: 'post',
        url: 'https://droplink.gokdeniz.me/register',
        data: {
          username: username,
          password: password,
          address: address
        }
      })
      .then((response) => {
        var response_data = response.data
        var response_status = response_data["status"]
        if (response_status === 0) {
          alert.error('Username unavailable')
        } if (response_status === 1) {
          alert.success('Registration completed')
        } else {
          alert.error('Registration failed')
        }
      }, (error) => {
        console.log(error);
      });
    }
    return (
          <div>
            <div class="container">
              <br />
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="box">
                    <h1 class="title">Easy DAO Onboarding</h1>
                    <h2 class="subtitle">You need to create an account to use Easy DAO Onboarding</h2>
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
                    <div class="field">
                      <label class="label">Ethereum address</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Ethereum address" onChange={event => setAddress(event.target.value)}/>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Invite code</label>
                      <small>You can enter random value here, since it is demo instance.</small>
                      <div class="control">
                        <input class="input" type="text" placeholder="Invite code"/>
                      </div>
                    </div>
                    <button class="button is-primary" onClick={Register}>Register</button>
                    <br/><br/>
                    <p>Already have an account? Login <Link to="/">here</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );

}