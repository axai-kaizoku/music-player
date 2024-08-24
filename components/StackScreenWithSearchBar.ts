import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerTitleStyle: {
		fontSize: 32,
		color: '#fff',
		fontFamily: 'GeistSemiBold',
	},
	headerLargeStyle: {
		backgroundColor: '#000',
	},
	headerLargeTitleStyle: {
		color: '#fff',
	},
	headerTintColor: '#fff',
	headerShadowVisible: false,
	headerTransparent: true,
};
