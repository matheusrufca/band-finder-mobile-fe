import { GoogleSignin } from '@react-native-google-signin/google-signin';

console.debug('auth', process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID);

export const setupAuth = () => {
	GoogleSignin.configure({
		webClientId: process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
	});
};