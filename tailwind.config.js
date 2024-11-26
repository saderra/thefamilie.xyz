/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    container: {
			center: true,
			padding: {
				DEFAULT: '.8rem',
				sm: '1.5rem'
			  },
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1140px",
				xl: "1280px",
				"2xl": "1440px"
    },
  },
    extend: {
		colors: {
			familie: {
				DEFAULT: '#fffefa',
				'50': '#f2f1ed',
				'100': '#e5e5e1',
				'150': '#d9d8d4',
				'200': '#cccbc8',
				'300': '#b3b2af',
				'400': '#999896',
				'500': '#807f7d',
				'600': '#666664',
				'700': '#4d4c4b',
				'800': '#333332',
				'900': '#1a1919'


			}
		},
		backgroundImage: theme => ({
			'home-mast': "url('/assets/images/familie-home-mast-min.jpg')"
		}),



	},
  },
  variants: {
		display: ['responsive', 'group-hover', 'group-focus'],
	},
  plugins: [ 
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}

