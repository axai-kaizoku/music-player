import { colors, fontSize } from '@/constants';
import {
	FontAwesome,
	FontAwesome6,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					backgroundColor: '#000',
					paddingTop: 10,
					paddingBottom: 18,
					height: 90,
					width: 'auto',
				},
				tabBarBackground: () => (
					<BlurView
						intensity={95}
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						}}
					/>
				),
			}}>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="heart" size={32} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="playlist-play"
							size={40}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => (
						<Ionicons name="musical-notes-sharp" size={36} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => (
						<FontAwesome6 name="users-line" size={32} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
