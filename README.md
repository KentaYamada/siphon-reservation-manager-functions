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

# Run local server
cd ./functions
npm run serve
```

## Deploy
```
# Deploy all functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:function_name
```
