import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const setupAuth = () => {
	GoogleSignin.configure({
		webClientId: '1020448917422-8mmojr0tt8cg72u9aejcdknio83b4efl.apps.googleusercontent.com',
	});
}