import React from "react";
import {
  Link,
  useHistory
} from "react-router-dom";



export default function Header() {
  const history = useHistory();
    function getUsername() {
      return sessionStorage.getItem('username');
    }
    function logout() {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('session');
      history.push('/');
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
                        <small>{getUsername()}</small>
                      </Link>
                      <Link class="button is-light" to="/" onClick={logout}>
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