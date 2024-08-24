import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name="favorites" />
			<Tabs.Screen name="playlists" />
			<Tabs.Screen name="(songs)" />
			<Tabs.Screen name="artists" />
		</Tabs>
	);
}
