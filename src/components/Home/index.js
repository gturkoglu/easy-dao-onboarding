import React, {useState} from "react";
import {
  Link
} from "react-router-dom";
import useMagicLink from 'use-magic-link';
import Header from '../Header';
import axios from 'axios';
import { useAlert } from 'react-alert'


export default function Home() {
      const [email, setEmail] = useState('')
      const [address, setAddress] = useState('')
      const alert = useAlert()
      const auth = useMagicLink('pk_live_12C2C7AA4E904206');

      function loginNow() {
          sessionStorage.setItem('email', email);
          auth.login(email);
      }
      function getTokens() {
        axios.get('https://droplink.gokdeniz.me/get_token?address=' + address, 
          { 
            crossdomain: true
          }
        )
          .then((response) => {
            var response_data = response.data
            var response_status = response_data["status"]
            if (response_status === 0) {
              alert.error("Membership token not sent. If this address haven't previously received membership token please check if you are typing address correct.")
            } if (response_status === 1) {
              var tx_hash = response_data["tx_hash"]
              alert.success("Membership token has been sent. TX: " +tx_hash)
            }
            console.log(response_status)
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
          });
      }

      if (auth.loggedIn) {
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
                        </ul>
                      </div>
                      <p>You can get membership token for organization <code>token.aragonid.eth</code>. You can only claim up to one membership token.</p>
                      <br/>
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" onChange={event => setAddress(event.target.value)} placeholder="Wallet address" />
                        </div>
                      </div>
                      <button class="button is-primary" onClick={getTokens}>Claim token</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
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
                    <h2 class="subtitle">You need to enter your e-mail address to login</h2>
                    <div class="field">
                      <label class="label">E-mail</label>
                      <div class="control">
                        <input class="input" type="email" placeholder="john@example.com" onChange={event => setEmail(event.target.value)}/>
                      </div>
                    </div>
                    <button class="button is-primary" onClick={loginNow}>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
  }

}