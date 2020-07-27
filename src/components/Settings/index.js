import React, {useState} from "react";
import {
  Link,
  Redirect
} from "react-router-dom";
import Header from '../Header';
import { useAlert } from 'react-alert'
import axios from 'axios';


export default function Settings() {
      const alert = useAlert()
      const [address, setAddress] = useState('')

      function changeAddress() {
        // eslint-disable-next-line
        axios.get('https://droplink.gokdeniz.me/change_address?address=' + address + '&' + 'session=' + sessionStorage.getItem('session'))
          .then((response) => {
            var response_data = response.data
            var response_status = response_data["status"]
            var response_message = response_data["message"]
            if (response_status === 0) {
              alert.error(response_message)
            } if (response_status === 1) {
              alert.success(response_message)
            }
          });
      }

      if (sessionStorage.getItem("session")) {


      return (
            	<div>
                <Header />
                <div class="container">
                <br />
                <div class="columns is-centered">
                  <div class="column is-half">
                    <div class="box">
                      <h1 class="title">Dashboard</h1>
                      <h2 class="subtitle">Welcome on board</h2>
                      <div class="tabs">
                        <ul>
                          <li><Link to="/">Claim token</Link></li>
                          <li><Link to="/organization">Organization</Link></li>
                          <li class="is-active"><Link to="/settings">Settings</Link></li>
                        </ul>
                      </div>
                      <h2 class="subtitle is-4">Settings</h2>
                      <p>You can edit your account settings here.</p>
                      <hr/>
                      <h6 class="subtitle is-5">Change Ethereum address</h6>
                      <div class="field is-horizontal">
                        <div class="field-body">
                          <div class="field">
                              <input class="input" type="text" onChange={event => setAddress(event.target.value)} placeholder="Enter new ETH address" />
                          </div>
                        </div>
                      </div>
                      <div class="field is-horizontal">
                        <div class="field-body">
                          <div class="field">
                            <div class="control">
                              <button class="button is-primary" onClick={changeAddress}>
                                Change Ethereum address
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>
            </div>
            </div>
        );
    } else {
    return (
          <Redirect to="/" />
      );
  }
}