import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider style={defaultStyles.container}>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};
