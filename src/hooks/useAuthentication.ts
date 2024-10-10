import { GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes, User } from '@react-native-google-signin/google-signin';
import { useState } from 'react';

export const useGoogleAuthentication = () => {
	const [user, setUser] = useState<User | undefined>(GoogleSignin.getCurrentUser() ?? undefined);
	const isAuthenticated = !!user;

	const signInOrSignUp = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const response = await GoogleSignin.signIn();

			console.debug('signIn:response', response);

			if (isSuccessResponse(response)) {
				setUser(response.data);
			} else {
				// sign in was cancelled by user
			}
		} catch (error) {
			console.debug('signIn:error', error)
			if (isErrorWithCode(error)) {
				switch (error.code) {
					case statusCodes.IN_PROGRESS:
						// operation (eg. sign in) already in progress
						break;
					case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
						// Android only, play services not available or outdated
						break;
					default:
					// some other error happened
				}
			} else {
				// an error that's not related to google sign in occurred
			}
		}
	};

	const signOut = async () => {
		try {
			await GoogleSignin.signOut();
			setUser(undefined)
		} catch (error) {
			console.debug('signOut:error', error)
		}
	};

	return {
		isAuthenticated,
		signInOrSignUp,
		signOut,
		user
	};
};
