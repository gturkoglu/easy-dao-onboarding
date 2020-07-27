import React, {useState} from "react";
import {
  Link
} from "react-router-dom";
import useMagicLink from 'use-magic-link';
import Header from '../Header';


export default function Home() {
      const [email, setEmail] = useState('')

      const auth = useMagicLink('pk_live_12C2C7AA4E904206');
      function loginNow() {
          sessionStorage.setItem('email', email);
          auth.login(email);
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
                          <li><Link to="/">Claim token</Link></li>
                          <li class="is-active"><Link to="/organization">Organization</Link></li>
                        </ul>
                      </div>
                      <h2 class="subtitle">Organization Details</h2>
                      <p>For more organization details visit <a href="https://rinkeby.aragon.org/#/token.aragonid.eth" target="_blank">token.aragonid.eth</a></p><br />
                      <ul>
                        <li><code>Organization Name</code> token</li>
                        <li><code>Organization Address</code> 0xFa1D07FC5E86D74165197c90Dde410A3c921511D</li>
                        <br />
                        <li>
                          <h3>Installed Aragon Apps</h3>
                          <ul>
                            <li><code>Tokens</code> 0x26b95bc8bde88e57ba1df8b8c77947f228297b6b</li>
                            <li><code>Voting</code> 0x11aa078fb0369de83662cecb820ebb55bd278786</li>
                            <li><code>Address</code> 0x49cf5736817f414f9468a1619a5b7a23d1710860</li>
                            <li><code>Vault (Contract only)</code> 0x26b95bc8bde88e57ba1df8b8c77947f228297b6b</li>
                          </ul>
                        </li>
                      </ul>
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