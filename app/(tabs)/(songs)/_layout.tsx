import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function SongsScreenLayout() {
	return (
		<View className="bg-black w-full h-screen text-white">
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Songs' }} />
			</Stack>
		</View>
	);
}
