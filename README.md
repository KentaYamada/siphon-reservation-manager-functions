# siphon-reservation-manager-functions
Reservation system APIs

## Requirements
- node v12.x
- firebase-tools

## Setup
```
# Install firebase CLI
npm i -g firebase-tools

# Download emulator
firebase init emulators

# Install packages
cd ./functions
npm install

# Set email account
ex) Gmail account configuration
firebase functions:config:set gmail.email="my-email@email.com"
firebase functions:config:set gmail.password="mypassword"
firebase functions.config:get

# Run local server
npm run serve
```

## Deploy
```
# Deploy all functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:function_name
```
