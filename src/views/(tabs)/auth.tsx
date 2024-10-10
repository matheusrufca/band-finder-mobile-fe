import { Button, StyleSheet, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useGoogleAuthentication } from '@/hooks/useAuthentication';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const styles = StyleSheet.create({
	container: { padding: 50 },
});

export default function AuthScreen() {
	// const { onGoogleButtonPress, user } = useAuthentication();
	const { signIn, signOut, user } = useGoogleAuthentication();

	const handleGoogleSigninButtonPress = () => { signIn(); };
	const handleGoogleSignOutButtonPress = () => { signOut(); };

	return (
		<ThemedView style={styles.container}>
			{!!user
				? <>
					<Button title='Sign out' onPress={handleGoogleSignOutButtonPress} />
					<Text>User: {user.user.name}</Text>
				</>
				: <GoogleSigninButton onPress={handleGoogleSigninButtonPress} />
			}
		</ThemedView>
	);
}



