/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { colors } from '@/constants';

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof colors.maximumTrackTintColor &
		keyof typeof colors.minimumTrackTintColor,
) {
	const theme = useColorScheme() ?? 'light';
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		// return colors[theme][colorName];
		return null;
	}
}
