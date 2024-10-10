# set js engine to hermes
https://reactnative.dev/docs/hermes


# eas setup

npm install -g eas-cli
eas login

eas build
	- android
	- set package id (and put it on app.json)
	- generate new keystore

# development build
https://docs.expo.dev/develop/development-builds/create-a-build/

npx expo install expo-dev-client

eas build --profile development --platform android
	- install and run on emulator

https://docs.expo.dev/build/setup/#install-the-latest-eas-cli


# development build
https://docs.expo.dev/develop/development-builds/introduction/

# Setup environment

# Setar authenticação no firebase
obter o google.json atualizado