
import { useGoogleAuthentication } from '@/hooks/useAuthentication';
import SignInSignUpScreen from './(auth)/sign-in-sign-up';
import ProfileScreen from './profile';


const InitialScreen = () => {

	const { isAuthenticated } = useGoogleAuthentication();

	return isAuthenticated ? <ProfileScreen /> : <SignInSignUpScreen />
}

export default InitialScreen