import TracksList from '@/components/TracksList';
import { screenPadding } from '@/constants/tokens';
import useNavigationSearch from '@/hooks/useNavigationSearch';
import { defaultStyles } from '@/styles';
import { View, Text, ScrollView } from 'react-native';

export default function SongsScreen() {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
			textColor: '#fff',
			obscureBackground: true,
		},
	});
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	);
}
