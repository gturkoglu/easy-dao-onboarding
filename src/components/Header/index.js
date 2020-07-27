import React from "react";
import useMagicLink from 'use-magic-link';
import {
  Link
} from "react-router-dom";



export default function Header() {
    const auth = useMagicLink('pk_test_F6EACA7E7AB6A6EF');
    function getEmailAddress() {
      return sessionStorage.getItem('email');
    }
    return (
          <div>
            <nav class="navbar is-black" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="/">
                  Easy DAO Onboarding
                </a>
              </div>

              <div class="navbar-menu">
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <Link class="button is-primary" to="/">
                        <small>{getEmailAddress()}</small>
                      </Link>
                      <Link class="button is-light" to="/" onClick={() => auth.logout()}>
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
      );

}