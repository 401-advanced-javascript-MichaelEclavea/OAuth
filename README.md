# LAB - Class 13

## Project: OAuth Discord

### Author: Bryant Davis, Michael Enclavea, Leah Russo

## Links and Resources

- [GitHub](https://github.com/401-advanced-javascript-MichaelEclavea/OAuth)


## Setup

### `.env` requirements (where applicable)


- `PORT` - desired port to be used for express
- `CLIENT_ID` - Discord dev account id
- `CLIENT_SECRET` - Discord Dev account secret
- `TOKEN_SERVER` - https://discord.com/api/oauth2/token
- `API_ENDPOINT` - https://discord.com/api/v6
`API_SERVER` - Generated in the dev tools for Discord with identify scope selected


### How to initialize/run your application (where applicable)

### command lines
- `npm init`
- `npm i -y`
- `nodemon`
- `live-server index.html`
- must have discord account to test
- must have discord dev account to test

## Tests
n/a

## UML
not applicable


## Change Log
1.7: *I believe it has finished with all the information being retrieved, final acp and submission* - 28 oct 2020
1.6: *fixed the method, changed out the URL from the get and changed the set from token to Bearer* 28 Oct 2020
1.5: *hours later.........was able to find the issue and changed the redirect_url and now retrives the token but issues with remoteUser method* 28 oct 2020
1.4: *fixed error and now retrieving code but getting bad request when requesting token* - 28 Oct 2020
1.3: *was able to get to the authorize page in discord but getting an error* - 28 Oct 2020
1.2: *discord dev account setup and .ENV secrets created* - 28 Oct 2020
1.1: *brought in Jacobs scaffolding as per the lab* - 28 Oct 2020
