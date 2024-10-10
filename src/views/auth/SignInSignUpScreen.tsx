import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useGoogleAuthentication } from '@/hooks/useAuthentication';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Redirect } from 'expo-router';


const styles = StyleSheet.create({
	container: {
		padding: 50,
	},
});

export const SignInSignUpScreen = () => {
	const { signInOrSignUp, user } = useGoogleAuthentication();

	const handleGoogleSignInButtonPress = () => { signInOrSignUp(); };

	return (
		<ThemedView style={styles.container}>
			{!!user
				? <Redirect href="/profile" />
				: <GoogleSigninButton onPress={handleGoogleSignInButtonPress} />
			}
		</ThemedView>
	);
}

