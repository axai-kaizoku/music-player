import { unknownTrackImageUri } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import { TrackListItemProps } from '@/types';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image,
} from 'react-native';

export default function TrackListItem({ track }: TrackListItemProps) {
	const isActiveTrack = false;
	return (
		<TouchableHighlight>
			<View style={{ ...styles.trackItemContainer }}>
				<View>
					<Image
						source={{
							uri: track.image ?? unknownTrackImageUri,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/>
				</View>
				<View style={{ width: '100%', flexDirection: 'column' }}>
					<Text
						numberOfLines={1}
						style={{
							...styles.trackTitleText,
							color: isActiveTrack ? colors.primary : colors.text,
						}}>
						{track.title}
					</Text>
					{track.artist && (
						<Text
							numberOfLines={1}
							style={{ ...styles.trackArtistText }}></Text>
					)}
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.text,
		fontSize: 18,
		marginTop: 4,
	},
});
