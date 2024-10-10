# SOCIAL LOGIN

    ## Create firebase project

    Add android app
    setup fingerprint sh1

    >	eas credentials
    select android and development build
    copy sh1 fingerprint

    go to authentication
    "get started"

    set google autentication

    download google-services.json

https://react-native-google-signin.github.io/docs/setting-up/expo#expo-and-firebase-authentication
add to app.json
"plugins": ["@react-native-google-signin/google-signin"],
"android": {
"googleServicesFile": "./google-services.json"
},

    add client id in .env



    	npx expo install @react-native-google-signin/google-signin




    	npx expo prebuild --clean

    	npx expo run:android (if on linux)
