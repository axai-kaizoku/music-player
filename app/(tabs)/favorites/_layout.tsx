import { StackScreenWithSearchBar } from '@/components/StackScreenWithSearchBar';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function FavoritesScreenLayout() {
	return (
		<View className="bg-black w-full h-screen text-white">
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Favorites',
					}}
				/>
			</Stack>
		</View>
	);
}
