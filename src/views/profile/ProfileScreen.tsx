import { Button, StyleSheet, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useGoogleAuthentication } from '@/hooks/useAuthentication';
import { User } from '@react-native-google-signin/google-signin';
import { Redirect } from 'expo-router';

const styles = StyleSheet.create({
	container: {
		padding: 50,
	},
});

type UserDetail = User['user'];

type UserDetailProps = {
	user: UserDetail
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
	return (
		<>
			<Text>Id: {user.id}</Text>
			<Text>Name: {user.name}</Text>
		</>
	);
};

export const ProfileScreen = () => {
	const { signOut, user } = useGoogleAuthentication();
	const handleGoogleSignOutButtonPress = () => { signOut(); };

	return (
		<ThemedView style={styles.container}>
			{!!user
				? <>
					<UserDetail user={user.user} />
					<Button title="Sign out" onPress={handleGoogleSignOutButtonPress} />
				</>
				: <Redirect href="/sign-in-sign-up" />
			}
		</ThemedView>
	);
};

export default ProfileScreen