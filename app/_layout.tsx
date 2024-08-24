import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { setCustomText } from 'react-native-global-props';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const customTextProps = {
	style: {
		fontFamily: 'Geist',
	},
};

setCustomText(customTextProps);

const App = () => {
	return (
		<SafeAreaProvider>
			<RootLayout />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
};

export default function RootLayout() {
	const [loaded] = useFonts({
		Geist: require('../assets/fonts/GeistRegular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
