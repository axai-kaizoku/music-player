import { FlatList, View } from 'react-native';
import library from '@/assets/data/library.json';
import TrackListItem from './TrackListItem';
import { TracksListPorps } from '@/types';
import { utilsStyles } from '@/styles';

const ItemDivider = () => (
	<View
		style={{
			...utilsStyles.itemSeparator,
			marginVertical: 0,
			marginLeft: 16,
			borderBlockColor: '#fff',
			borderWidth: 0.8,
		}}
	/>
);
export default function TracksList({ ...flatListProps }: TracksListPorps) {
	return (
		<FlatList
			data={library}
			contentContainerStyle={{ paddingTop: 200, paddingBottom: 100 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TrackListItem track={{ ...track, image: track.artwork }} />
			)}
			{...flatListProps}
		/>
	);
}
