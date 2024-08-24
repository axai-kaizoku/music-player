/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#fc3c44',
				muted: '#9ca3af',
				maximumTrackTintColor: 'rgba(225,225,225,0.4)',
				minimumTrackTintColor: 'rgba(225,225,225,0.4)',
			},
			padding: {
				screen: 24,
			},
			fontSize: {
				xs: 12,
				sm: 16,
				base: 20,
				lg: 24,
			},
			fontFamily: {
				geist: ['Geist'],
			},
		},
	},

	plugins: [],
};
