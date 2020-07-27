# Easy DAO Onboarding

This project works with [droplink](https://github.com/gturkoglu/droplink).

## Releases

* `v1.0.0` is accessible on https://coordinated-hand.surge.sh/
   * Even though this version works, I don't recommend to use this version since next version have more cool features!
   
* `v1.0.1` is accessible on https://dao-onboarding-v1-0-1.surge.sh/
  * This version only depends on droplink for user management and sending DAO membership tokens.

* Latest release is always accessible on https://dao-onboarding.surge.sh/

## Features

This app is very simple since it aims to keep DAO onboarding process easy. 

Only an valid e-mail address is required to login application and after that users can send DAO membership token to their Ethereum addresses. Also users can view the organization details for the DAO which they are receiving membership token for.

* Requesting DAO membership token
	* Uses `axios` to send `GET` request for asking an membership token.
	* Returns alert if token has been sent or not

* Viewing DAO organization details
	* Organization name
	* Addresses related to organization
