# Easy DAO Onboarding

This project works with [droplink](https://github.com/gturkoglu/droplink).

## Features

This app is very simple since it aims to keep DAO onboarding process easy. 

Only an valid e-mail address is required to login application and after that users can send DAO membership token to their Ethereum addresses. Also users can view the organization details for the DAO which they are receiving membership token for.

* Requesting DAO membership token
	* Uses `axios` to send `GET` request for asking an membership token.
	* Returns alert if token has been sent or not

* Viewing DAO organization details
	* Organization name
	* Addresses related to organization
