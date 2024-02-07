const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'*.html',
		'public/preline/dist/*.js',
		'qgis/index.html',
		'aboutus/index.html',
	],
  theme: {
    extend: {
			fontFamily: {
				satoshi: ["Satoshi", , ...defaultTheme.fontFamily.sans],
				generalSans: ["General Sans", , ...defaultTheme.fontFamily.sans],
			}
		},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}

