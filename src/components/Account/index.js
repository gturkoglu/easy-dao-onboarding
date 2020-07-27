import React from "react";
import {
  Link,
  Redirect
} from "react-router-dom";
import Header from '../Header';
import axios from 'axios';
import { useAlert } from 'react-alert'


export default function Home() {
      const alert = useAlert()

      function getTokens() {
        axios.get('https://droplink.gokdeniz.me/claim_token?session=' + sessionStorage.getItem('session'))
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

      if (sessionStorage.getItem('session')) {
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
                          <li class="is-active"><Link to="/">Claim token</Link></li>
                          <li><Link to="/organization">Organization</Link></li>
                          <li><Link to="/settings">Settings</Link></li>
                        </ul>
                      </div>
                      <h2 class="subtitle is-4">Claim token</h2>
                      <hr/>
                      <p>You can get membership token for organization <code>token.aragonid.eth</code>. You can only claim up to one membership token.</p>
                      <br/>
                      <p>Membership token will be sent to registered Ethereum address. You can change your Ethereum address at settings.</p>
                      <br/>
                      <button class="button is-primary" onClick={getTokens}>Claim token</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        );
    } else {
    return (
          <Redirect to="/"></Redirect>
      );
  }

}