import { FlatListProps } from 'react-native';

export type TrackListItemProps = {
	track: {
		title: string;
		image?: string;
		artist?: string;
	};
};

export type TracksListPorps = Partial<FlatListProps<unknown>>;
